"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "exercises",
      [
        {
          id_exercise: 1,
          name: "Bench Press",
          main_muscle: "Chest",
          material: "Barbell",
          description:
            "Place a barbell on the rack and add any additional weight in the form of weight plates, ensuring that the amount of weight is even on both ends of the bar. Lie down on the bench press so that your head is beneath the barbell. Plant your feet on the floor on either side of the bench, or on the bench itself — whichever is most comfortable. Place both hands on the barbell in an overhand grip (palms facing away from you), slightly wider than your shoulders. Push the bar away from you to unrack the barbell and extend your elbows to hold the barbell directly in front of your chest. This is your starting position. Inhale. Bend your elbows outwards to lower the barbell towards you until the bar touches your chest. Exhale. Extend your elbows and push the barbell away from your chest to return to the starting position. Repeat for the specified number of repetitions before returning the barbell to a secure position on the rack.",
          image_path: "1.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 2,
          name: "Bent Over Row",
          main_muscle: "Upper Back",
          material: "Barbell",
          description:
            "Holding a barbell with both hands with an overhand grip, hands slightly wider than shoulder-width, plant both feet on the floor shoulder-width apart. While maintaining a slight bend in your knees, hinge forward from your hips so that your torso is parallel to the floor. Extend your arms directly below your chest. This is your starting position. Inhale. Exhale. Bend your elbows to bring the barbell in towards your lower ribs. You should feel a small squeeze between your shoulder blades. Inhale. Extend your elbows to lower the barbell and return to the starting position. Repeat for the specified number of repetitions.",
          image_path: "2.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 3,
          name: "Bicep Curl",
          main_muscle: "Biceps",
          material: "Barbell",
          description:
            "Holding a barbell with both hands in an underhand grip (palms facing away from your body) with arms extended in front of you, plant both feet on the floor shoulder-width apart. This is your starting position. Inhale. Exhale. Bend your elbows to bring the barbell in towards your chest, ensuring that your elbows remain in close contact with the sides of your body. Inhale. Extend your elbows to lower the barbell and return to the starting position. Repeat for the specified number of repetitions.",
          image_path: "3.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 5,
          name: "Deadlift",
          main_muscle: "Hamstrings",
          material: "Barbell",
          description:
            "Standing directly behind an Olympic barbell, plant both feet on the floor shoulder-width apart. Bend at both the hips and knees to place your hands on the barbell in a mixed grip (one palm facing towards your body, one palm facing away). Draw your shoulder blades down and back to push your chest out slightly. This is your starting position. Inhale. Exhale. Using your glutes and hamstrings, push through the heels of your feet to extend your hips and legs to find a neutral standing position, ensuring that you maintain a proud chest and your head is an extension of your spine. Inhale. Bend at the hips and, once the bar reaches knee height, bend your knees to return to the starting position, ensuring that your knees remain behind your toes. Once again, ensure that you maintain a proud chest and that your head is an extension of your spine. Repeat for the specified number of repetitions.",
          image_path: "5.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 6,
          name: "Decline Bench Press",
          main_muscle: "Chest",
          material: "Barbell",
          description:
            "Place a barbell on the rack and add any additional weight in the form of weight plates, ensuring that the amount of weight is even on both ends of the bar. Lie down on the decline bench so that your head is beneath the barbell. Place your legs under the circular leg pad so that it rests on the front of your ankle when your knees are bent to 90 degrees. Place both hands on the barbell in an overhand grip (palms facing away from you), slightly wider than your shoulders. Push the bar away from you to unrack the barbell and extend your elbows to hold the barbell directly in front of your chest. This is your starting position. Inhale. Bend your elbows outwards to lower the barbell towards you until the bar touches (or almost touches) your lower chest. Exhale. Extend your elbows and push the barbell away from your chest to return to the starting position. Repeat for the specified number of repetitions before returning the barbell to a secure position on the rack.",
          image_path: "6.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 7,
          name: "Clean Pull",
          main_muscle: "Full Body",
          material: "Barbell",
          description:
            "Holding a barbell with both hands in an overhand grip (palms facing towards you), plant both feet on the floor slightly further than shoulder-width apart. While maintaining a slight bend in your knees, hinge forward from your hips and allow the bar to run along the length of your thighs. You should feel tension in your hamstrings (back of your legs). Draw your shoulder blades back and down to push your chest out slightly and ensure that your head is an extension of your spine. This is your starting position. Inhale. Exhale. Push through your heels and, using your glutes and hamstrings, quickly extend your hips to reach an upright position. At the same time, bend and elevate your elbows to raise the bar to approximately chin height. As the bar reaches chin height, rotate your elbows around under the bar and at the same time bend and soften your knees. Extend your knees to reach a neutral standing position, holding the barbell directly below your chin with palms facing away from you and elbows pointing forward.* *Ensure that the bar remains in close contact with your body through this portion of the movement. Inhale. Rotate your elbows around and over the bar and extend your arms and hinge forward from your hips to return to the starting position. Repeat for the specified number of repetitions.",
          image_path: "7.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 8,
          name: "Front Raise",
          main_muscle: "Shoulders",
          material: "Barbell",
          description:
            "Safely pick up a barbell. Please read the barbell safety cues for instructions on how to do this. Holding a barbell with an overhand grip (palms facing towards your body) directly in front of your body, plant both feet on the floor slightly further than shoulder-width apart. This is your starting position. Inhale. Exhale. While maintaining a slight bend in your elbows, gently raise the barbell forwards and up to just below shoulder height. Inhale. Slowly lower the barbell to return to the starting position. Repeat for the specified number of repetitions.",
          image_path: "8.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 9,
          name: "Front Squat",
          main_muscle: "Quadriceps",
          material: "Barbell",
          description:
            "Set the barbell on the squat rack at approximately chin height. Position yourself underneath the bar. Place both hands on the bar in an overhand grip (palms facing away from your body) slightly wider than your shoulders. Standing underneath the barbell with it resting on your collar bone, bring your elbows forward and elevate them to approximately shoulder height, then stand up tall and release the barbell from the squat rack. Take a small step away and plant both feet on the floor slightly further than shoulder-width apart. This is your starting position. Inhale. Looking straight ahead, bend at both the hips and knees, ensuring that your knees point toward your toes. Continue bending your knees until your upper legs are parallel with the floor. Ensure that your elbows remain elevated and your back remains as upright as possible. Exhale. Extend both knees to return to the starting position. Repeat for the specified number of repetitions before returning the bar to a secure position on the squat rack.",
          image_path: "9.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 10,
          name: "Good Morning",
          main_muscle: "Hamstrings",
          material: "Barbell",
          description:
            "With a barbell resting across both shoulders, plant both feet on the floor hip-width apart. Draw your shoulder blades down and back to push your chest out slightly. This is your starting position. Inhale. Bend your knees slightly and set this as a fixed angle. Without changing the angle of your knees, hinge forwards from your hips. Ensure that you maintain a proud chest and that your head is an extension of your spine. You should feel tension in your hamstrings (back of your legs). Exhale. Push through your heels and, using your glutes and hamstrings, extend your hips to return to the starting position. Repeat for the specified number of repetitions.",
          image_path: "10.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 11,
          name: "Hip Thrust",
          main_muscle: "Glutes",
          material: "Barbell",
          description:
            "Begin seated on the ground, with a bench placed horizontally behind you, and your knees bent. Lay a barbell across your hips, holding it with both hands on either side of your hips. You may wish to place a pad or towel around the bar to increase comfort. With knees bent and feet firmly planted on the floor, lean back onto the bench so that it is gently pressing into your upper back. This is your starting position. Inhale. Exhale. Holding onto the barbell, press your heels into the mat and raise your hips off the floor until your body forms one straight line from chin to knee, resting your shoulders on the bench and ensuring that your head is an extension of your spine. Inhale. Lower your hips to return to the starting position, but without resting your glutes on the mat. Repeat for the specified number of repetitions.",
          image_path: "11.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 12,
          name: "Landmine Squat and Press",
          main_muscle: "Full Body",
          material: "Barbell",
          description:
            "Place a barbell into the core trainer, followed by the desired weight. Holding the barbell with both hands with a neutral grip (palms facing inwards) in front of your chest, plant both feet on the floor shoulder-width apart. This is your starting position. Inhale and brace your core. Looking straight ahead, bend at both the hips and knees, ensuring that your knees remain in line with your toes. Continue bending your knees until your upper legs are parallel with the floor. Ensure that your torso remains as upright as possible. You should feel tension in your glutes. Exhale and push through your heels, using your quads and glutes to extend your hips and knees to return to the starting position. At the same time, extend your elbows to press the end of the barbell above your head. Inhale and bend your elbows to lower the barbell and return to the starting position. Use your momentum from lowering the barbell to continue into the next repetition. Repeat for the specified number of repetitions.",
          image_path: "12.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 13,
          name: "Lunge",
          main_muscle: "Quadriceps",
          material: "Barbell",
          description:
            "Safely place a barbell on your shoulders. Please read the barbell safety cues for instructions on how to do this. Plant both feet on the floor shoulder-width apart. This is your starting position. Inhale. Carefully take a big step forwards with your left foot. As you plant your left foot on the floor, bend both knees to approximately 90-degrees, ensuring that your weight is evenly distributed between both legs. When done correctly, your front knee will be aligned with your ankle and your back knee will be hovering just off the floor. Exhale. Extend both knees and transfer your weight completely onto your right foot. Step your left foot backward to return to the starting position. Inhale. Carefully take a big step forwards with your right foot. As you plant your right foot on the floor, bend both knees to approximately 90-degrees, ensuring that your weight is evenly distributed between both legs. When done correctly, your front knee will be aligned with your ankle and your back knee will be hovering just off the floor. Exhale. Extend both knees and transfer your weight completely onto your left foot. Step your right foot backward to return to the starting position. Continue alternating between left and right for the specified number of repetitions.",
          image_path: "13.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 14,
          name: "Overhead Press",
          main_muscle: "Shoulders",
          material: "Barbell",
          description:
            "Safely pick up a barbell. Please read the barbell safety cues for instructions on how to do this. Holding a barbell with an overhand (palms facing towards your body) directly in front of your body, plant both feet on the floor slightly further than shoulder-width apart. Bring the barbell forward and upwards into your chest. Your palms should now be facing away from your body. This is your starting position. Inhale. Exhale. Using the muscles in your shoulders and arms, extend your elbows to press the barbell directly above your head. Your arms should be in line with your ears on either side of your head. Inhale. Bend your elbows to lower the barbell into the starting position. Repeat for the specified number of repetitions.",
          image_path: "14.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 15,
          name: "Preacher Curl",
          main_muscle: "Biceps",
          material: "Barbell",
          description:
            "Holding a barbell with both hands in an underhand grip (palms facing up), rest your arms over the preacher bench with arms extended in front of you, shoulder-width apart. Transition into a split stance with your left foot forward and right foot back. This is your starting position. Inhale. Exhale. While keeping your upper arms as still as possible, bend your elbows to bring the barbell in towards your forehead. Inhale. Extend your elbows to lower the barbell and return to the starting position. Repeat for the specified number of repetition",
          image_path: "15.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 16,
          name: "Reverse Curl",
          main_muscle: "Biceps",
          material: "Barbell",
          description:
            "Holding a barbell with both hands in an overhand grip with arms extended in front of you, plant both feet on the floor shoulder-width apart. This is your starting position. Inhale. Exhale. Bend your elbows to bring the barbell in towards your chest, ensuring that your elbows remain in close contact with the sides of your body. Inhale. Extend your elbows to lower the barbell and return to the starting position. Repeat for the specified number of repetitions.",
          image_path: "16.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 17,
          name: "Romanian Deadlift",
          main_muscle: "Hamstrings",
          material: "Barbell",
          description:
            "Holding a barbell with both hands in an overhand grip (palms facing towards your body) in front of your legs, plant both feet on the floor shoulder-width apart. Draw your shoulder blades down and back to push your chest out slightly. This is your starting position. Inhale. Bend your knees slightly and set this as a fixed angle. Without changing the angle of your knees, hinge forwards from your hips and allow the barbell to run along the length of your thighs and halfway down your shins. Ensure that you maintain a proud chest and that your head is an extension of your spine. You should feel tension in your hamstrings (back of your legs). As you reach halfway down your shins, exhale. Push through your heels and, using your glutes and hamstrings, extend your knees and hips to return to the starting position. Ensure that the barbell remains in contact with your legs. Repeat for the specified number of repetitions.",
          image_path: "17.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 18,
          name: "Squat",
          main_muscle: "Quadriceps",
          material: "Barbell",
          description:
            "Set the barbell on the squat rack at approximately chin height. Position yourself underneath the bar so that it rests comfortably on your shoulders. Place both hands on the bar in an overhand grip (palms facing away from your body) slightly wider than your shoulders. Standing underneath the barbell with it resting on your shoulders, stand up tall and release it from the squat rack. Take a small step backwards and plant both feet on the floor slightly further than shoulder-width apart. This is your starting position.",
          image_path: "18.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 19,
          name: "Bulgarian Split Squat",
          main_muscle: "Glutes",
          material: "Barbell",
          description:
            "Place a bench horizontally behind you. Set the barbell on the squat rack at approximately chin height. Position yourself underneath the bar so that it rests on your shoulders. Place both hands on the bar in an overhand grip (palms facing away from your body) slightly wider than your shoulders. Standing underneath the barbell with it resting on your shoulders, stand up tall and release it from the squat rack. Carefully step your right foot backwards, allowing the ball of your foot to rest on top of the bench. Carefully shuffle your left foot forward, if needed, ensuring that your feet are shoulder-width apart. This is your starting position. Inhale. Bend both knees to approximately 90-degrees, ensuring that your weight is evenly distributed between both legs. When done correctly, your front knee will be aligned with your ankle. Exhale. Push through the heel of your left foot and toe of your right foot to extend both legs and return to the starting position. Complete half of the specified number of repetitions on the same side, before completing the remaining repetitions on the other side. Return the bar to a secure position on the squat rack.",
          image_path: "19.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
        {
          id_exercise: 20,
          name: "Upright Row",
          main_muscle: "Traps",
          material: "Barbell",
          description:
            "Hold a barbell with both hands in an overhand grip (palms facing towards you) shoulder-width apart and plant both feet on the floor slightly further than shoulder-width apart. With arms extended, hold the barbell directly in front of your body. This is your starting position. Inhale. Exhale. Using the muscles in both your shoulders and arms, bend your elbows outwards and upwards to bring the barbell up to your chest. Avoid “shrugging” your shoulders by drawing your shoulder blades down and back. Inhale. Extend your elbows to return to the starting position. Repeat for the specified number of repetitions.",
          image_path: "20.gif",
          createdAt: "2022-12-29 00:00:00",
          updatedAt: "2022-12-29 00:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
