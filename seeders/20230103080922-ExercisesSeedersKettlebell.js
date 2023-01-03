"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "exercises",
      [
        {
          id_exercise: 69,
          name: "Goblet Squat",
          main_muscle: "Quadriceps",
          material: "Kettlebell",
          description: "Holding a kettlebell with both hands directly in front of your chest, plant both feet on the floor slightly further than shoulder-width apart. Gently draw your pubic bone to your belly button (engage pelvic floor). This is your starting position. Inhale. Looking straight ahead, bend at both the hips and knees, ensuring that your knees point toward your toes. Continue bending your knees until your upper legs are parallel with the floor, ensuring that your back remains between a 45- to 90-degree angle to your hips. Exhale. Push through your heels and extend your knees to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 70,
          name: "Kettlebell Swing",
          main_muscle: "Full Body",
          material: "Kettlebell",
          description: "SHolding a kettlebell directly in front of your body, plant both feet on the floor slightly further than shoulder-width apart. Inhale. While maintaining a slight bend in your knees, tilt forwards from your hips and allow the kettlebell to gently swing backwards between your legs. This is your starting position. Exhale. Using your glutes and hamstrings, extend your legs and hips to swing the kettlebell forwards and upwards to shoulder height. Inhale. Bend your knees and tilt forward from your hips to lower the kettlebell and return to the starting position. Repeat for the specified number of repetitions, ensuring that your glutes and hamstrings power the movement and you are not lifting the kettlebell with your arms and shoulders.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 71,
          name: "Shoulder Press",
          main_muscle: "Shoulders",
          material: "Kettlebell",
          description: "Begin standing and hold a kettlebell in your right hand at shoulder height, with a neutral grip (palm facing towards your body) and the kettlebell resting on the back of your forearm and your shoulder. Place your left hand on your hip or out to the side for balance and plant both feet on the floor hip-width apart. This is your starting position. Inhale and brace your core. Exhale and using the muscles in both your shoulder and arm, press the kettlebell above your head - ensure that your arm is in line with your right ear. Avoid “shrugging” by drawing your shoulder blades down and back. Inhale as you bend your elbow to lower the kettlebell back to the starting position. You should feel the tension in your shoulder and tricep. Repeat for the specified number of repetitions or time on each.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 72,
          name: "Kettlebell One Arm Row",
          main_muscle: "Upper Back",
          material: "Kettlebell",
          description: "Begin standing with the feet hip distance apart and hold a kettlebell in each hand with a neutral grip (palms facing each other). Hinge the torso forward to 45-degrees with the arms straight and a slight bend in the knees. Row the kettlebells back and up as you squeeze the shoulder blades together. Pause for a moment at the top before lowering the kettlebells back down to the start position. Repeat for the desired repetitions.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 73,
          name: "Turkish Get Up",
          main_muscle: "Full Body",
          material: "Kettlebell",
          description: "Start by lying on your left side on a yoga mat with your knees bent and a kettlebell positioned on the ground next to you. Using both hands, grab the kettlebell handle and roll onto your back then resting the kettlebell on your stomach. Now lying flat on your back, with your right leg extended and left knee bent keeping your foot flat on the ground, grab the handle with your left hand, inhale and brace your core then exhale as you press the kettlebell up by extending your left arm. The kettlebell should rest on the back of your forearm with your arm fully extended and aligned with your shoulder. Your right arm should lie flat on the ground at approximately 45 degrees away from your body. This is your starting position. Inhale and brace your core. Looking directly at the kettlebell and keeping your arm fully extended, roll up onto your right elbow. Once stable, roll up onto your right hand then lift your hips so that your body forms a straight line from your right shoulder to your right foot. Exhale as you distribute your weight between your right hand and left foot so you are able to sweep your right leg under your body to reposition it behind you into a half kneeling position. From here, find a stable lunge position and look straight ahead. Press through your front foot and extend your legs to finish in a standing position with the kettlebell extended overhead. This is the halfway point. Perform the above steps in reverse order to return to the starting position. Keeping the kettlebell extended, inhale as you take a big step backward with your right foot and lower your right knee to the ground. Leaning to your right, extend your right arm to support yourself on the ground and distribute your weight between your right arm and left leg so you can reposition your right leg in front of you and lower your hips to the ground. Slowly roll down onto your right elbow and finally onto the ground to return to the starting position. You should feel the tension in your shoulders and core throughout this exercise as you maintain control of the kettlebell extended overhead. Initially you can practice this movement with a lighter weight to ensure you are comfortable with performing the sequence correctly. Once you are confident with your execution you can start loading the exercise. Repeat for the specified number of repetitions or time on each side.",
          createdAt: "2023-01-03 00:00:00",
          updatedAt: "2023-01-03 00:00:00",
        },
        {
          id_exercise: 74,
          name: "Thruster",
          main_muscle: "Full Body",
          material: "Kettlebell",
          description: "Begin standing, holding a kettlebell with both hands at chest height, feet planted on the floor slightly further than shoulder-width apart. Point both feet slightly outward. This is your starting position. Inhale and brace your core. Looking straight ahead, bend at both the hips and knees until your upper legs are parallel with the floor. Ensure that your back remains within a 45- and 90-degree angle to your hips and keep your knees aligned with your toes. Exhale and push through your heels extending your legs, at the same time extend your elbows to press the kettlebell overhead. Ensure that your arms are in line with your ears once your arms are fully extended. You should feel the weight going through your glutes, quads and shoulders. Repeat for the specified number of repetitions or time.",
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
