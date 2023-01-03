"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "exercises",
      [
        {
          id_exercise: 49,
          name: "Back Hyperextension",
          main_muscle: "Lower Back",
          material: "Machine",
          description:
            "Start standing in the back extension with both feet on the foot platform, heels locked in underneath the footpads and upper thighs resting on the leg pads, just below your hips, so that your body forms one straight line from your head to your heels. Bend your elbows to cross your arms against your chest, draw your shoulder blades down and back and engage your abdominal muscles to draw your belly button in towards your spine. This is your starting position. Inhale. Slowly hinge forward from your hips to lower your torso over the leg pad as far down as possible, ensuring that you maintain a neutral spine. Exhale. Using your glutes and the muscles in your lower back, elevate your torso to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 50,
          name: "Butterfly",
          main_muscle: "Chest",
          material: "Machine",
          description:
            "Start standing in the back extension with both feet on the foot platform, heels locked in underneath the footpads and upper thighs resting on the leg pads, just below your hips, so that your body forms one straight line from your head to your heels. Bend your elbows to cross your arms against your chest, draw your shoulder blades down and back and engage your abdominal muscles to draw your belly button in towards your spine. This is your starting position. Inhale. Slowly hinge forward from your hips to lower your torso over the leg pad as far down as possible, ensuring that you maintain a neutral spine. Exhale. Using your glutes and the muscles in your lower back, elevate your torso to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 51,
          name: "Cable Fly Crossovers",
          main_muscle: "Chest",
          material: "Machine",
          description:
            "To get yourself into the starting position, place the pulleys on a high position (above your head), select the resistance to be used and hold the pulleys in each hand. Step forward in front of an imaginary straight line between both pulleys while pulling your arms together in front of you. Your torso should have a small forward bend from the waist. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, extend your arms to the side (straight out at both sides) in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms and torso should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you breathe out. Make sure to use the same arc of motion used to lower the weights. Hold for a second at the starting position and repeat the movement for the prescribed amount of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 52,
          name: "Cable Pull Through",
          main_muscle: "Glutes",
          material: "Machine",
          description:
            "Connect the rope attachment and set the cable pulley at the bottom of the pole. Turn to face away from the cable pulley. Standing one step away, plant both feet on the floor slightly further than shoulder-width apart, ensuring that you have one foot on either side of the cable pulley. Place both hands on the rope with a neutral grip (palms facing inwards) and find a neutral standing position, holding the rope directly in front of your body with arms extended. This is your starting position. Inhale. While maintaining a slight bend in your knees, hinge forward from your hips until your torso is parallel to the floor. Once your torso is parallel with the floor, exhale. Push through your heels and, using your glutes and hamstrings, extend your hips to return to the starting position, ensuring that your arms remain extended and relaxed. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 53,
          name: "Calf Press",
          main_muscle: "Calves",
          material: "Machine",
          description:
            "Sit in the leg press and plant the balls of your feet on the foot plate slightly further than shoulder-width apart. Press the foot plate away from your torso and release the leg press from its locked position. This is your starting position. Inhale. While maintaining a slight bend in your knees and limiting the movement to just your ankles, lower the foot plate slightly towards your torso. This should cause your toes to be pulled back and you should feel a stretch along the underside of your legs. Exhale. Press through the balls of your feet to push the foot plate away from your torso, as if you’re standing on the tips of your toes. Lower the foot plate slightly to return to the starting position. Repeat for the specified number of repetitions before returning the leg press to its locked position.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 54,
          name: "Cable Front Raise",
          main_muscle: "Shoulders",
          material: "Machine",
          description:
            "Connect the small bar attachment and set the cable pulley at the bottom of the pole. Turn to face away from the cable pulley. Standing a half-step away, plant both feet on the floor slightly further than shoulder-width apart, ensuring that you have one foot on either side of the cable pulley. Place both hands on the bar with an overhand grip (palms facing your body) and find a neutral standing position, holding the bar directly in front of your body with arms extended. This is your starting position. Inhale. Exhale. While maintaining a slight bend in your elbows, gently raise the bar up to be level with chin height. Inhale. Slowly lower the bar to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 55,
          name: "Cable Kickback",
          main_muscle: "Glutes",
          material: "Machine",
          description:
            "Connect the ankle wrap attachment and set the cable pulley at the bottom of the pole. Wrap the attachment around your left ankle. Turn to face the cable pulley. Standing one step away, plant both feet on the floor slightly further than shoulder-width apart. Hinge forward from your hips so that your chest is parallel to (in line with) the floor and rest both hands on the pole at head height. This is your starting position. Inhale. Exhale. Keeping your right leg firmly planted, extend your left leg backwards and upwards to hip height, ensuring that your foot remains flexed and your toes point down towards the floor. Inhale. Slowly lower your left leg to return to the starting position. Complete half of the specified number of repetitions on the same side before completing the remaining repetitions on the other side.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 56,
          name: "Hack Squat",
          main_muscle: "Quadriceps",
          material: "Machine",
          description:
            "Stand in the hack squat and bend your knees and hips to rest your back against the backrest and shoulders against the shoulder pads. Reposition your feet to plant them shoulder-width apart on the footplate. Release the hack squat from its locked position. This is your starting position. Inhale. Looking straight ahead, bend at both the hips and knees, ensuring that your knees point toward your toes. Continue bending your knees until your upper legs are parallel with the footplate of the hack squat. Ensure that your elbows remain elevated and your back remains against the backrest. Exhale. Extend both knees to return to the starting position. Repeat for the specified number of repetitions before returning the hack squat to its locked position.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 57,
          name: "Iso-lateral High Row",
          main_muscle: "Upper Back",
          material: "Machine",
          description:
            "1.) Start by setting up weight on a high iso lateral machine, then sit down with your feet in front of you and thighs rested underneath the padding for stability. Reach up with one hand and grab one of the handles with an overhand grip as this will be your starting position. Slowly lower the handle down towards your side at chest level, squeezing your back and lat muscles on the way down, and hold for a count. Return back up to the starting position. Repeat for as many reps and sets as desired.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 58,
          name: "Lat Pulldown",
          main_muscle: "Upper Back",
          material: "Machine",
          description:
            "Connect the long bar attachment to the lat pulldown. Place both hands on the bar with an underhand grip (palms facing towards you), hands shoulder-width apart. Sit down on the bench directly below the bar and plant both feet on the floor. Adjust the leg pads so that they are pressing firmly, but comfortably, on your upper legs. This is your starting position. Inhale. Exhale. Lean back slightly from your hips, bend your elbows and pull the bar down until it is just below chin height. You should feel a squeeze in your biceps and your back. Inhale. Slowly lean forward and extend your elbows to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 59,
          name: "Leg Extension",
          main_muscle: "Quadriceps",
          material: "Machine",
          description:
            "Begin in a seated position on the leg extension machine, ensuring that your back is firmly pressed into the back pad. Place your legs under the circular leg pad so that it rests on the front of your ankle when your knees are bent to 90 degrees. This is your starting position. Inhale. Exhale. While keeping your feet flexed or in a neutral position and your torso as still as possible, extend your knees and push the circular pad upwards until your legs are straight. You should feel tension in your quadriceps (on the top of your legs). Inhale. Bend your knees to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 60,
          name: "Leg Press",
          main_muscle: "Quadriceps",
          material: "Machine",
          description:
            "Sit in the leg press and plant your feet on the foot plate, slightly further than shoulder-width apart. Press the foot plate away from your torso and release the leg press from its locked position. This is your starting position. Inhale. Bend your knees and lower the foot plate towards your torso until your knees almost touch your chest. Exhale. Extend your knees and press the foot plate away to return to the starting position, ensuring that your knees remain in line with your toes at all times. Repeat for the specified number of repetitions before returning the leg press to its locked position.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 61,
          name: "Lying Leg Curl",
          main_muscle: "Hamstrings",
          material: "Machine",
          description:
            "Facing away from the machine, lay in a prone position (face down) on a bench and grasp the end with both hands. Bring your feet towards your glutes until your knees are bent at approximately 90 degrees. Your knees should remain on the end of the bench. This is your starting position. While keeping your torso as still as possible, inhale and slowly extend your right leg until it is almost straight. You should feel tension in your hamstrings during this movement. Engage your glutes, exhale and bend your right leg to return to the starting position. Repeat for the specified number of repetitions on each side.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 62,
          name: "Straight Arm Pulldown",
          main_muscle: "Upper Back",
          material: "Machine",
          description:
            "Connect the EZ-bar attachment and set the cable pulley to the top of the pole. Turn to face the cable pulley. Standing one step away, plant both feet on the floor slightly further than shoulder-width apart. Place both hands on the bar with an overhand grip (palms facing down), ensuring that they are slightly wider than your body. Bend at both the hips and knees and lean forward to 45-degrees. While maintaining a slight bend in your elbows, extend your arms to bring the bar to head height. This is your starting position. Inhale. Exhale. Without changing the angle at your elbow, pull the bar in towards your legs until your elbows are in close contact with the sides of your body. Inhale. Slowly lower the bar to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 63,
          name: "Seated Cable Row",
          main_muscle: "Upper Back",
          material: "Machine",
          description:
            "Connect the close-grip attachment to the seated row. Place both hands on the close-grip attachment with a neutral grip (palms facing inwards). Sit on the bench and place your feet on the foot plates. Hold the attachment directly in front of your belly button with arms extended. Pull your shoulder blades down and back slightly to push your chest out. This is your starting position. Inhale. Exhale. While maintaining a proud chest, bend your elbows to pull the attachment in towards your belly button, ensuring that your elbows remain in close contact with the sides of your body. You should feel a small squeeze between your shoulder blades. Inhale. Extend your elbows to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 64,
          name: "Seated Calf Raise",
          main_muscle: "Calves",
          material: "Machine",
          description:
            "Press into the balls of your feet and elevate your heels off the floor as high as you can. Inhale. Lower your heels to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 65,
          name: "Smith Machine Squat",
          main_muscle: "Quadriceps",
          material: "Machine",
          description:
            "Set the height of the Smith machine bar to approximately chin height. Position yourself underneath the bar so that it rests on your shoulders. Place both hands on the bar in an overhand grip (palms facing away from your body) slightly wider than your shoulders. Standing underneath the bar with it resting on your shoulders, plant both feet on the floor slightly further than shoulder-width apart. Stand up tall and release the bar from its locked position. This is your starting position. Inhale. Looking straight ahead, bend at both the hips and knees, ensuring that your knees remain in line with your toes. Continue bending your knees until your upper legs are parallel to the floor. Ensure that your back remains between a 45- to 90-degree angle to your hips. Exhale. Push through the heels of your feet and extend your legs to return to the starting position. Repeat for the specified number of repetitions before returning the bar to its locked position.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 66,
          name: "Stair Machine",
          main_muscle: "Cardio",
          material: "Machine",
          description:
            "Try to touch lightly without leaning with your arms or putting your body weight on the handrails. Focus on maintaining a good, upright posture from head to heels and avoid bending at or putting pressure on the waist. Place your entire foot on the steps to have a better range of motion and activate more muscles. Range of motion is important in stair stepping: For the full benefit, let the step fully extend beneath you (without bottoming out) before you switch feet slowly, and don't try and sprint. Square your hips, face the front of the machine, and keep your core tight",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 67,
          name: "Treadmill",
          main_muscle: "Cardio",
          material: "Machine",
          description: "Before you step onto the treadmill, ensure that the belt is stationary and the safety clip is attached to the treadmill (if one exists). When you step on the treadmill, place your feet on the frame to the sides of the belt whilst holding the handrail. Turn on the treadmill using either a quick start button or selecting a program. Ensure the speed is one you can comfortably maintain when you step on the belt. If you're unsure, begin with a walking pace. Start and finish each workout with a minimum five minute warm up and cool down. Once you get moving and feel stable, remove your hands from the rails and increase the speed to your desired pace. To come to a stop, place your hands on the handrails and feet on the frame to the sides of the belt. Hit the stop button and allow the belt to come to a complete stop.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 68,
          name: "Elliptical Trainer",
          main_muscle: "Cardio",
          material: "Machine",
          description: "Step onto the trainer, and face the screen. At this point, it may rock back and forth, but don't worry - the exercise hasn't started yet. Start pedalling in an oval (or elliptical) shape, or alternatively, select a workout programme from the machine's library. If it's a cross-trainer, pull the hand bars towards you as you go. Not all elliptical trainers have moveable arms, but if they do - use them to work your back and upper-body. To make it harder, increase the resistance. These are typically expressed as up or down arrows on the console. At first, introduce resistance slowly so you can get into a good rhythm. Keep pulling and pedalling, for as long as you want. There will generally be a 'Time Elapsed' card on the screen so you can monitor how long you've been working out.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("exercises", null, {});
  },
};
