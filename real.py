import math
import cv2
import numpy as np
from time import time
import mediapipe as mp
import matplotlib.pyplot as plt

def detectPose(image, pose, display=True):
    # Initializing mediapipe pose class.
    mp_pose = mp.solutions.pose
    # Setting up the Pose function.
    # Initializing mediapipe drawing class, useful for annotation.
    mp_drawing = mp.solutions.drawing_utils

    # Create a copy of the input image.
    output_image = image.copy()

    # Convert the image from BGR into RGB format.
    imageRGB = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    # Perform the Pose Detection.
    results = pose.process(imageRGB)

    # Retrieve the height and width of the input image.
    height, width, _ = image.shape

    # Initialize a list to store the detected landmarks.
    landmarks = []

    # Check if any landmarks are detected.
    if results.pose_landmarks:

        # Draw Pose landmarks on the output image.
        mp_drawing.draw_landmarks(image=output_image, landmark_list=results.pose_landmarks,
                                  connections=mp_pose.POSE_CONNECTIONS)

        # Iterate over the detected landmarks.
        for landmark in results.pose_landmarks.landmark:
            # Append the landmark into the list.
            landmarks.append((int(landmark.x * width), int(landmark.y * height),
                              (landmark.z * width)))


    # Check if the original input image and the resultant image are specified to be displayed.
    if display:

        # Display the original input image and the resultant image.
        plt.figure(figsize=[22, 22])
        plt.subplot(121);
        plt.imshow(image[:, :, ::-1]);
        plt.title("Original Image");
        plt.axis('off');
        plt.subplot(122);
        plt.imshow(output_image[:, :, ::-1]);
        plt.title("Output Image");
        plt.axis('off');
        plt.show();

        ##this cause error
        # Also Plot the Pose landmarks in 3D.
        mp_drawing.plot_landmarks(results.pose_world_landmarks, mp_pose.POSE_CONNECTIONS)

    # Otherwise
    else:

        # Return the output image and the found landmarks.
        return output_image, landmarks


def calculateAngle2D(landmark1, landmark2, landmark3):

    # Get the required landmarks coordinates.
    x1, y1, _ = landmark1
    x2, y2, _ = landmark2
    x3, y3, _ = landmark3

    # Calculate the angle between the three points
    angle = math.degrees(math.atan2(y3 - y2, x3 - x2) - math.atan2(y1 - y2, x1 - x2))

    # Check if the angle is less than zero.
    if angle < 0:
        # Add 360 to the found angle.
        angle += 360

    # Return the calculated angle.
    angle=int(angle)
    return angle


def calculateAngle3D(landmark1, landmark2, landmark3):

    # Get the required landmarks coordinates.
    x1, y1, z1 = landmark1
    x2, y2, z2 = landmark2
    x3, y3, z3 = landmark3

    # Calculate the angle between the three points
    v1 = np.array([x1 - x2, y1 - y2, z1 - z2])
    v2 = np.array([x3 - x2, y3 - y2, z3 - z2])

    v1mag = math.sqrt(v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2])
    v1norm = np.array([v1[0] / v1mag, v1[1] / v1mag, v1[2] / v1mag])

    v2mag = math.sqrt(v2[0] * v2[0] + v2[1] * v2[1] + v2[2] * v2[2])
    v2norm = np.array([v2[0] / v2mag, v2[1] / v2mag, v2[2] / v2mag])

    res = v1norm[0] * v2norm[0] + v1norm[1] * v2norm[1] + v1norm[2] * v2norm[2]

    angle = math.acos(res)
    # Check if the angle is less than zero.
    if angle < 0:
        # Add 360 to the found angle.
        angle += 360

    # Return the calculated angle.
    return angle


def main():
    # Initializing mediapipe pose class.
    mp_pose = mp.solutions.pose
    # Setting up the Pose function.
    pose = mp_pose.Pose(static_image_mode=True, min_detection_confidence=0.3)  # , model_complexity=2)
    # Initializing mediapipe drawing class, useful for annotation.
    mp_drawing = mp.solutions.drawing_utils

    ## real time
    # Setup Pose function for video.
    pose_video = mp_pose.Pose(static_image_mode=False, min_detection_confidence=0.5)  # , model_complexity=1)

    # Initialize the VideoCapture object to read from the webcam.
    video = cv2.VideoCapture(0)

    # Create named window for resizing purposes
    cv2.namedWindow('Pose Detection', cv2.WINDOW_NORMAL)

    # Initialize the VideoCapture object to read from a video stored in the disk.
    #video = cv2.VideoCapture('media/running.mp4')

    # Set video camera size
    video.set(3, 1280)
    video.set(4, 960)

    # Initialize a variable to store the time of the previous frame.
    time1 = 0

    # Iterate until the video is accessed successfully.
    while video.isOpened():

        # Read a frame.
        ok, frame = video.read()

        # Check if frame is not read properly.
        if not ok:
            # Break the loop.
            break

        # Flip the frame horizontally for natural (selfie-view) visualization.
        frame = cv2.flip(frame, 1)

        # Get the width and height of the frame
        frame_height, frame_width, _ = frame.shape

        # Resize the frame while keeping the aspect ratio.
        frame = cv2.resize(frame, (int(frame_width * (640 / frame_height)), 640))

        # Perform Pose landmark detection.
        frame, landmarks = detectPose(frame, pose_video, display=False)


        ##### Calculate angle
        right_shoulder_angle=0
        if landmarks:
            right_shoulder_angle = calculateAngle2D(landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value],
                                              landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value],
                                              landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value])
            print("left shoulder angle " + str(right_shoulder_angle))


        # Set the time for this frame to the current time.
        time2 = time()

        # Check if the difference between the previous and this frame time > 0 to avoid division by zero.
        if (time2 - time1) > 0:
            # Calculate the number of frames per second.
            frames_per_second = 1.0 / (time2 - time1)

            # Write the calculated number of frames per second on the frame.
            cv2.putText(frame, 'FPS: {}'.format(int(frames_per_second)), (10, 30), cv2.FONT_HERSHEY_PLAIN, 2,
                        (0, 255, 0), 3)
            cv2.putText(frame, 'Left shoulder: {}'.format(int(right_shoulder_angle)), (200, 30), cv2.FONT_HERSHEY_PLAIN, 2,
                        (0, 255, 0), 3)

        # Update the previous frame time to this frame time.
        # As this frame will become previous frame in next iteration.
        time1 = time2

        # Display the frame.
        cv2.imshow('Pose Detection', frame)

        # Wait until a key is pressed.
        # Retreive the ASCII code of the key pressed
        k = cv2.waitKey(1) & 0xFF

        # Check if 'ESC' is pressed.
        if (k == 27):
            # Break the loop.
            break

    # Release the VideoCapture object.
    video.release()

    # Close the windows.
    cv2.destroyAllWindows()

main()