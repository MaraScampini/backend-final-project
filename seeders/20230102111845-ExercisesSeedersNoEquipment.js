"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "exercises",
      [
        {
          id_exercise: 39,
          name: "Burpee",
          main_muscle: "Full Body",
          material: "None",
          description:
            "Plant both feet on the mat shoulder-width apart. This is your starting position. Bend at both the hips and knees to place your hands on the mat on either side of your feet, ensuring that your spine remains in a neutral position. Inhale. Jump both of your feet backwards so that your legs are completely extended behind you, resting on the balls of your feet. Your body should be in one straight line from your head to your heels. Jump both of your feet forwards in between your hands, once again, ensuring that your feet remain shoulder-width apart. Exhale. Propel your body upwards into the air. Extend your legs below you and your arms above your head. Inhale. Land in the starting position, ensuring that you maintain ‘soft’ knees to prevent injury. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 40,
          name: "Crunch",
          main_muscle: "Abdominals",
          material: "None",
          description:
            "Start by lying flat on your back on a yoga mat. Bend your knees and position your feet firmly on the mat, ensuring that they are hip-width apart and that your spine is in a neutral position. Place your hands behind your head and interlace your fingers, ensuring that you relax your head into your hands and draw your shoulder blades down and back. This is your starting position. Inhale. Set your T-zone. Exhale. Tuck your chin into your chest and draw your ribs to your hips to elevate your head, shoulder blades and upper back off the mat, ensuring that your T-zone remains set to prevent the ‘doming’ of your abdominals. Inhale. Lower your head and shoulders to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 41,
          name: "Push Up",
          main_muscle: "Chest",
          material: "None",
          description:
            "Place both hands on the mat slightly further than shoulder-width apart, feet together on the mat behind you while resting on the balls of your feet. Gently draw your ribs to your hips to engage your core. This is your starting position. Inhale. While maintaining a neutral spine, bend your elbows and lower your torso towards the mat until your arms form two 90-degree angles. Exhale. Push through your chest and extend your elbows to lift your body back into the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 42,
          name: "Plank",
          main_muscle: "Abdominals",
          material: "None",
          description:
            "Start by placing your forearms (wrist to elbow) firmly on the mat, ensuring that your elbows are directly below your shoulders. Extend both legs behind you and elevate your hips off the mat, resting on the balls of your feet. Brace your abdominals and ensure that your spine remains in a neutral position. Hold this position for the specified amount of time, breathing deeply throughout.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 43,
          name: "Sit Up",
          main_muscle: "Abdominals",
          material: "None",
          description:
            "Start by lying flat on your back on a yoga mat. Bend your knees and position your feet firmly on the mat and place your hands behind your earlobes. Engage your abdominal muscles by drawing your belly button in towards your spine. This is your starting position. Inhale. Exhale. Keeping your heels firmly planted on the floor, slowly lift your head, shoulder blades, and torso off the floor. Lengthen your spine to sit up tall. Inhale. Slowly lower your torso, shoulder blades and head to the mat to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 44,
          name: "Superman",
          main_muscle: "Lower Back",
          material: "None",
          description:
            "Start by lying flat on your stomach on a yoga mat with both legs extended behind you, toes untucked. Place your forearms on top of one another parallel to (in line with) the front edge of the mat and lower your head to rest on top of your forearms. This is your starting position. Inhale. Elevate your head and chest off the mat and reach your hands towards your feet, drawing your shoulder blades down and back. At the same time, elevate your legs off the mat slightly with feet pointed. Draw your belly button in towards your spine to prevent discomfort in your lower back. Hold this position for approximately five seconds before lowering your legs, chest, forearms and head to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 45,
          name: "Pistol Squat",
          main_muscle: "Quadriceps",
          material: "None",
          description:
            "Begin standing with your feet together and parallel. Extend one leg in front of you, as straight as you can, with your heel hovering off the floor. Raise your arms straight out in front of you. Keeping your core tight and your spine straight, bend your standing leg and lower your body, continuing to extend your other leg in front of you. Keep the foot of your standing leg flat on the floor. Continue to bend through your standing knee as far as you can while aiming to get your extended leg parallel to the floor. Straighten your standing leg to return upright, keeping your extended leg straight. Switch legs and repeat.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 46,
          name: "Pike Push Up",
          main_muscle: "Triceps",
          material: "None",
          description:
            "Place both hands on the mat slightly further than shoulder-width apart, with feet apart on the mat behind you, while resting on the balls of your feet. Gently draw your ribs to your hips to engage your core. This is your starting position. Jump both of your feet outwards so that they are slightly wider than your hips, ensuring that your hips remain level. While maintaining a neutral spine and stabilising through your abdominals, elevate your hips to create an inverted V-shape. Open your chest and create space between your shoulders and ears by drawing your shoulder blades down and back. While maintaining a neutral spine and stabilising through your abdominals, bend your elbows to lower your forehead towards the floor, rocking forward onto your toes and keeping your hips at a fixed angle. You should feel tension in your shoulders and triceps throughout this movement. Push through your arms and shoulders to extend your elbows and lift your body back into the inverted V-shape position. Repeat for the specified number of repetitions or time.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 47,
          name: "Russian Twist",
          main_muscle: "Abdominals",
          material: "None",
          description:
            "Start seated on a yoga mat with knees bent and heels firmly planted. Lean back slightly so that your abdominals are engaged and you are balancing on your sit bones. This is your starting position. While keeping your lower body as still as possible, twist your torso to the right. Untwist your torso to return to the starting position. While keeping your lower body as still as possible, twist your torso to the left. Untwist your torso to return to the starting position. Continue alternating between right and left for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 48,
          name: "",
          main_muscle: "",
          material: "",
          description: "",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("exercises", null, {});
  },
};
