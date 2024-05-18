import React, { useState } from "react";
import axios from "axios";
import { SentimentIntensityAnalyzer } from "vader-sentiment";
import "./styles/Analyser.css";


const Analyser = () => {

  const [url, setUrl] = useState("");
  const [comments, setComments] = useState([]);
  const [sentimentResult, setSentimentResult] = useState("");
  const [positiveComments, setPositiveComments] = useState([]);
  const [negativeComments, setNegativeComments] = useState([]);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAnalyseClick = async () => {
    try {
      const videoId = extractVideoId(url);
      let allComments = [];
      let nextPageToken = null;

      do {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}${
            nextPageToken ? `&pageToken=${nextPageToken}` : ""
          }`
        );
        const fetchedComments = response.data.items.map(
          (item) => item.snippet.topLevelComment.snippet.textDisplay
        );
        allComments = [...allComments, ...fetchedComments];
        nextPageToken = response.data.nextPageToken;
      } while (nextPageToken);

      setComments(allComments);
      analyzeComments(allComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const extractVideoId = (videoUrl) => {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(regExp);
    return match && match[1] ? match[1] : "";
  };

  const analyzeComments = (comments) => {
    const analyzer = new SentimentIntensityAnalyzer();
    let totalScore = 0;
    let positive = [];
    let negative = [];
    comments.forEach((comment) => {
      const score =
        SentimentIntensityAnalyzer.polarity_scores(comment).compound;
      totalScore += score;
      if (score >= 0) {
        positive.push(comment);
      } else {
        negative.push(comment);
      }
    });
    const averageScore = totalScore / comments.length;
    setSentimentResult(averageScore);
    setPositiveComments(positive);
    setNegativeComments(negative);
  };

  return (
    <div className="analyser-container">
      <div>
        <div className="form-container">
          <div className="field">
            <label className="label">Please enter your YouTube URL here:</label>
            <input
              type="text"
              className="input"
              value={url}
              onChange={handleInputChange}
            />
          </div>
          <button className="button" onClick={handleAnalyseClick}>
            Analyse
          </button>
        </div>
      </div>
      {sentimentResult !== "" && (
        <div className="sentiment-result">
          <h3>Sentiment Analysis Result:</h3>
          <p>Average sentiment score: {sentimentResult.toFixed(2)}</p>
        </div>
      )}
      {comments.length > 0 && (
        <div className="comments-container">
          <div>
            <h3>Positive Comments {positiveComments.length}</h3>
            <div className="cmt">
              {positiveComments.length > 0 ? (
                positiveComments.map((comment, index) => (
                  <div className="positive-cmt" key={index}>
                    {comment}
                  </div>
                ))
              ) : (
                <p>No positive comments</p>
              )}
            </div>
          </div>
          <div>
            <h3>Negative Comments {negativeComments.length}</h3>
          <div className="cmt">
            {negativeComments.length > 0 ? (
              negativeComments.map((comment, index) => (
                <div className="negative-cmt" key={index}>
                  {comment}
                </div>
              ))
            ) : (
              <p>No negative comments</p>
            )}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analyser;
