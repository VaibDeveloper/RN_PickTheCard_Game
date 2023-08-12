//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import questions from "../components/Questions";

// create a component

const AnswerScreen = ({
  navigation,
  visible,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  Question,
  score,
  setScore,
  Level,
}) => {
  const [isCorrectAns, setIsCorrectAns] = useState();
  const [buttonclicked, setButtonclicked] = useState(false);
  const [Disabled, setDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const handleAnswerButtonClick = (selectedAnswer) => {
    let newScore = score;
    setShow(true);
    setButtonclicked(true);
    setDisabled(true);
    if (selectedAnswer === Question.CorrectOption) {
      newScore += 1;
      setIsCorrectAns(true);
      setScore(newScore);
      console.log("Score :", newScore);
    } else {
      setIsCorrectAns(false);
      console.log("Incorrect");
      console.log("Score :", newScore);
    }

    setTimeout(() => {
      if (currentQuestionIndex < 9) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setDisabled(false);
      }
    }, 1000);

    setTimeout(() => {
      if (currentQuestionIndex == 9) {
        navigation.navigate("Result", { Score: newScore, Level_No: Level });
      }
    }, 1000);
  };

  return !visible ? (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{Question.Question}</Text>
      <View style={styles.grid}>
        {Question?.Option?.map((Option, index) => (
          <TouchableOpacity
            style={[
              styles.button,
              buttonclicked == true &&
                Option == Question.CorrectOption && {
                  backgroundColor: "#70e000",
                },
              buttonclicked == true &&
                Option !== Question.CorrectOption && {
                  backgroundColor: "#f21b3f",
                },
            ]}
            key={index}
            onPress={() => handleAnswerButtonClick(Option)}
            disabled={Disabled}
          >
            <View style={styles.image_frame}>
              {show == true ? (
                <Image style={styles.image} source={Option} />
              ) : null}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {Level == 0 || Level == 1 || Level == 2 || Level == 3 ? (
        <View style={styles.space} />
      ) : null}
      {Level == 4 || Level == 5 || Level == 6 ? <View /> : null}
    </SafeAreaView>
  ) : null;
};

const QuestionScreen = ({ visible, setVisible, Question, Mode, Level }) => {
  if (Mode === "easy") {
    useEffect(() => {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 2500);
      return () => clearTimeout(timeout);
    });
  } else if (Mode === "hard") {
    useEffect(() => {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1500);

      return () => clearTimeout(timeout);
    });
  }

  return visible ? (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>MEMORISE THE CARDS</Text>
      <View style={styles.grid}>
        {Question?.Option?.map((Option, index) => (
          <TouchableOpacity style={styles.button} key={index} disabled={true}>
            <View style={styles.image_frame}>
              <Image style={styles.image} source={Option} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {Level == 0 || Level == 1 || Level == 2 || Level == 3 ? (
        <View style={styles.space} />
      ) : null}
      {Level == 4 || Level == 5 || Level == 6 ? <View /> : null}
    </SafeAreaView>
  ) : null;
};

const Parent = ({
  item,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  score,
  setScore,
  navigation,
  Level,
  Mode,
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <View>
      <QuestionScreen
        visible={visible}
        setVisible={setVisible}
        Question={item}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        Mode={Mode}
        Level={Level}
      />

      <AnswerScreen
        navigation={navigation}
        score={score}
        setScore={setScore}
        Question={item}
        visible={visible}
        setVisible={setVisible}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        Level={Level}
      />
    </View>
  );
};

const Game = ({ navigation, route }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  let { Level, Mode } = route.params;
  let level_ques = questions[Level];

  return (
    <SafeAreaView style={styles.container}>
      {level_ques.map((item, index) =>
        currentQuestionIndex === index ? (
          <Parent
            navigation={navigation}
            item={item}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            score={score}
            setScore={setScore}
            Level={Level}
            Mode={Mode}
          />
        ) : null
      )}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#24ded3",
    flexDirection: "column",
  },
  heading: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 80,
  },
  button: {
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    width: 180,
    height: 180,
    paddingVertical: "0%",
    marginBottom: 20,
    marginTop: 10,
    marginBottom: 50,
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    aspectRatio: 1,
    borderRadius: 10,
    resizeMode: "contain",
    height: 170,
    flexDirection: "column",
  },
  space: {
    height: 90,
  },
  image_frame: {
    aspectRatio: 1,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 4,
    height: 180,
    flexDirection: "column",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginHorizontal: 0,
  },
});

//make this component available to the app
export default Game;
