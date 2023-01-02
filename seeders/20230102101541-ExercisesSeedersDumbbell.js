"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "exercises",
      [
        {
          id_exercise: 21,
          name: "Bench Press",
          main_muscle: "Chest",
          material: "Dumbbell",
          description:
            "Holding one dumbbell in each hand with an overhand grip (palms facing away from your body), lie down on a bench and plant your feet on the floor on either side of the bench, or on the bench itself — whichever is most comfortable. Extend your elbows to hold the dumbbells directly in front of your chest. This is your starting position. Inhale. Bend your elbows outwards to lower the dumbbells towards your chest until your arms form two 90-degree angles, like an inverted push-up. Exhale. Extend your elbows and push the dumbbells away from your chest to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 22,
          name: "Concentration Curl",
          main_muscle: "Biceps",
          material: "Dumbbell",
          description:
            "Holding a dumbbell in your right hand, sit down on the end of a bench with legs wide and feet planted on the floor. Hinge forward from your hips slightly and rest your right elbow on the inside of your right knee. Extend your arm to hold the dumbbell just above the floor in an underhand grip (palm facing up). This is your starting position. Inhale. Exhale. While keeping your upper arm as still as possible and firmly pressed into your knee, bend your elbow to bring the dumbbell up towards your shoulder. Inhale. Extend your elbow to lower the dumbbell and return to the starting position. Complete half of the specified number of repetitions on the same side before completing the remaining repetitions on the other side.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 23,
          name: "Hammer Curl",
          main_muscle: "Biceps",
          material: "Dumbbell",
          description:
            "Holding a dumbbell in each hand in a neutral grip (palms facing inwards) with arms extended on either side of your body, plant both feet on the floor shoulder-width apart. This is your starting position. Inhale. Exhale. Bend your elbows to bring the dumbbells in towards your chest, ensuring that your elbows remain in close contact with the sides of your body. Inhale. Extend your elbows to lower the dumbbells and return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 24,
          name: "Dumbbell Row",
          main_muscle: "Upper Back",
          material: "Dumbbell",
          description:
            "Place a bench in front of you. Holding a dumbbell in your right hand, place your left hand and left knee on the bench. Reposition your right foot to ensure that both your shoulders and hips are parallel to (in line with) the floor. Extend your right arm directly below your chest. This is your starting position. Inhale. Exhale. Bend your right elbow to bring the dumbbell in towards your body, ensuring that your elbow remains in close contact with the right side of your body. Inhale. Extend your right elbow to return to the starting position. Complete half of the specified repetitions on the same side before completing the remaining repetitions on the other side.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 25,
          name: "Step Up",
          main_muscle: "Quadriceps",
          material: "Dumbbell",
          description:
            "Start by placing the bench horizontally in front of you. Holding one dumbbell in each hand, plant both feet on the floor slightly further than shoulder width apart. Firmly plant your entire left foot on the bench, making sure your knees are not more forward than your toes. Push through your left heel to extend your left leg. Avoid pushing through your toes to prevent placing additional pressure on your shins, knees and quadriceps. As you straighten your left leg, release your right leg and step up on to the bench. Reverse this pattern back to the floor, starting with your left leg. Repeat starting with your right foot on the bench. Continue alternating between left and right for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 26,
          name: "Lateral Raises",
          main_muscle: "Shoulders",
          material: "Dumbbell",
          description:
            "Holding a dumbbell in each hand in a neutral grip (palms facing inwards) and arms extended by your sides, plant both feet on the floor shoulder-width apart. This is your starting position. Inhale. Exhale. While maintaining a slight bend in your elbows, raise the dumbbells outwards and upwards to shoulder height, ensuring that you draw your shoulder blades down and back. Inhale. Lower the dumbbells to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 27,
          name: "Pullover",
          main_muscle: "Chest",
          material: "Dumbbell",
          description:
            "Holding a dumbbell with both hands, lie down on a bench. Plant your feet on the floor on either side of the bench, or on the bench itself — whichever is most comfortable. Extend your elbows to hold the dumbbell directly above your chest. This is your starting position. Inhale. Without changing the angle of your elbows, draw the dumbbell backwards and over your head in an arc-like motion until your upper arms are in line with your ears. Exhale. Draw the dumbbell upwards and forwards in the same arc-like motion to return to the starting position, once again, ensuring that the angle of your elbows remains unchanged. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 28,
          name: "Renegade Row",
          main_muscle: "Upper Back",
          material: "Dumbbell",
          description:
            "Holding one dumbbell in each hand, position your hands on the mat shoulder-width apart and both feet slightly apart behind you, resting on your knees. Gently draw your ribs to your hips to engage your core. This is your starting position. Inhale. Exhale. Release your right hand and bend your elbow to draw the dumbbell in towards you, ensuring that your elbow remains in close contact with the right side of your body. You should feel a small squeeze between your shoulder blades. Engage your abdominals to ensure that your hips remain parallel to (in line with) the floor. Inhale. Extend your right elbow to return to the starting position. Exhale. Release your left hand and bend your elbow to draw the dumbbell in towards you, ensuring that your elbow remains in close contact with the left side of your body. You should feel a small squeeze between your shoulder blades. Engage your abdominals to ensure that your hips remain parallel to (in line with) the floor. Inhale. Extend your left elbow to return to the starting position. Continue alternating between right and left for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 29,
          name: "Reverse Curl",
          main_muscle: "Biceps",
          material: "Dumbbell",
          description:
            "Holding a dumbbell in each hand in an overhand grip with arms extended directly in front of your body, plant both feet on the floor hip-width apart. This is your starting position. Inhale. Exhale. Bend your elbows to bring the dumbbells in towards your chest, ensuring that your elbows remain in close contact with the sides of your body. Inhale. Extend your elbows to lower the dumbbells and return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 30,
          name: "Shrug",
          main_muscle: "Traps",
          material: "Dumbbell",
          description:
            "Hold your dumbbells by your side with your palms facing inwards. Your feet should be shoulder-width apart and your core should be engaged. Raise your shoulders as high as you can by contracting your traps. Lower the dumbbells back down and repeat.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 31,
          name: "Triceps Extension",
          main_muscle: "Triceps",
          material: "Dumbbell",
          description:
            "Holding a single dumbbell with both hands, sit on the bench with a straight back. Extend your arms above your head, ensuring that they are on either side of your ears. This is your starting position. Inhale. While keeping your shoulders as still as possible, bend your elbows to lower the dumbbell behind your head. Exhale. Using your triceps, extend your elbows to return to the starting position, ensuring that your shoulders, elbows and wrists remain in line with one another at all times. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 32,
          name: "Zottman Curl",
          main_muscle: "Biceps",
          material: "Dumbbell",
          description:
            "Holding a dumbbell in each hand in an underhand grip (palms facing away from your body) with arms extended on either side, but slightly in front of your body, plant both feet on the floor shoulder-width apart. This is your starting position. Inhale. Exhale. Bend your elbows to bring the dumbbells in towards your chest, ensuring that your elbows remain in close contact with the sides of your body. Inhale. As your hands reach the top position, rotate your wrist so that you are holding the dumbbells in an overhand grip (palms facing down). Exhale. Extend your elbows to lower the dumbbells. Rotate the dumbbells so that you are holding them in an underhand grip to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 33,
          name: "Triceps Kickback",
          main_muscle: "Triceps",
          material: "Dumbbell",
          description:
            "Stand with your feet shoulder-width apart. Get into position by reaching back with one foot and standing in a semi-lunge position with your body bent forward. Bend your right elbow to a 90-degree angle so that your upper arm is in line with your body and your forearm is pointing towards the floor. This is your starting position. Inhale. Exhale. While keeping your right shoulder as still as possible, extend your right elbow back until the dumbbell is in line with your body, ensuring that your upper arm remains in close contact with the side of your body. Inhale. Bend your elbow to return to the starting position. Complete half of the specified number of repetitions on the same side before completing the remaining repetitions on the other side.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 34,
          name: "Bent Over Row",
          main_muscle: "Upper Back",
          material: "Dumbbell",
          description:
            "Holding a dumbbell in each hand with a neutral grip (palms facing inwards), plant both feet on the floor shoulder-width apart. While maintaining a slight bend in your knees, hinge forward from your hips so that your torso is parallel to the floor. Extend your arms directly below your chest. This is your starting position. Inhale. Exhale. Bend your elbows to bring the dumbbells in towards your body, ensuring your elbows remain in close contact with the sides of your body. You should feel a small squeeze between your shoulder blades. Inhale. Extend your elbows to lower the dumbbells and return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 35,
          name: "Chest Fly",
          main_muscle: "Chest",
          material: "Dumbbell",
          description:
            "Holding one dumbbell in each hand with a neutral grip (palms facing inwards), lie down on a bench and plant your feet on the floor on either side of the bench, or on the bench itself — whichever is most comfortable. Extend your elbows to hold the dumbbells together directly in front of your chest. This is your starting position. Inhale. While maintaining a slight bend in your elbows, lower the dumbbells outwards and downwards until they are in line with your chest. Exhale. Using the muscles in your chest, push the dumbbells upwards and inwards to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 36,
          name: "Curtsy Lunge",
          main_muscle: "Quadriceps",
          material: "Dumbbell",
          description:
            "Plant both feet on the floor shoulder-width apart. Gently draw your pubic bone to your belly button (engage pelvic floor). This is your starting position. Inhale. Carefully take a big step backwards with your left foot, placing it behind and outside the line of your right leg. As you plant your left foot on the floor, bend both knees to approximately 90-degrees, ensuring that your weight is evenly distributed between both legs. When done correctly, your front knee will be aligned with your ankle and your back knee will be hovering just off the floor. Exhale and extend both knees, transferring your weight completely onto your right foot. Step your left foot forward to return to the starting position. You should feel tension in your hamstrings, quadriceps, and glutes throughout this movement. Alternate between sides for the specified amount of repetitions or time.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 37,
          name: "Floor Press",
          main_muscle: "Chest",
          material: "Dumbbell",
          description:
            "Holding a dumbbell in each hand, start by lying flat on your back on a yoga mat. Bend your knees and position your feet firmly on the mat, ensuring that they are hip-width apart, or extend them along the mat – whichever is more comfortable. Extend your elbows to hold the dumbbells directly in front of your chest with an overhand grip (palms facing away from you), hands slightly wider than your shoulders. This is your starting position. Inhale. Bend your elbows outwards to lower the dumbbells towards you until your elbows lightly touch the floor. Exhale. Extend your elbows and push the dumbbells away from your chest to return to the starting position. Repeat for the specified number of repetitions.",
          createdAt: "2023-01-02 00:00:00",
          updatedAt: "2023-01-02 00:00:00",
        },
        {
          id_exercise: 38,
          name: "Walking Lunge",
          main_muscle: "Quadriceps",
          material: "Dumbbell",
          description:
            "Holding a dumbbell in each hand, plant both feet on the floor shoulder-width apart. Gently draw your pubic bone to your belly button (engage pelvic floor). This is your starting position. Inhale. Take a big step forward with your left foot. As you plant your foot on the floor, bend both knees at approximately 90-degrees. This is called a lunge position. If done correctly, your front knee should be aligned with your ankle and your back knee should be hovering just off the floor. Exhale. Push through the heel of your left foot and toe of your right foot to extend both legs. Inhale. Transfer your weight onto your left foot and take a large step forward with your right foot. As you plant your right foot, bend both knees at approximately 90-degrees into lunge position. Exhale. Push through the heel of your right foot and toe of your left foot to extend both legs. Inhale. Transfer your weight onto your right foot. Continue alternating between left and right for the specified number of repetitions.",
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
