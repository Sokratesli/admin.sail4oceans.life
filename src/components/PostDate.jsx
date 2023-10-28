import React from "react";
import moment from "moment";
import 'moment-timezone';
import "moment/locale/de"; // Sprachunterstützung für Deutsch hinzufügen

const PostDate = ({ date }) => {
  const userTimezone = moment.tz.guess(); // Zeitzone des Benutzers ermitteln
  const today = moment().tz(userTimezone).startOf("day"); // Datum von heute in der Zeitzone des Benutzers
  const postDate = moment(date).tz(userTimezone); // Datum des Posts in der Zeitzone des Benutzers
  const minutesAgo = moment.duration(moment().diff(postDate)).asMinutes(); // Differenz in Minuten berechnen
  const secondsAgo = moment.duration(moment().diff(postDate)).asSeconds(); // Differenz in Sekunden berechnen

  if (secondsAgo < 0) {
    // Weniger als 0 Sekunden
    return <span>0 seconds ago</span>;
  } else if (secondsAgo < 60) {
    // Weniger als 1 Minute
    return <span>{Math.round(secondsAgo)} seconds ago</span>;
  } else if (minutesAgo < 60) {
    // Weniger als 60 Minuten
    return <span>{Math.round(minutesAgo)} minutes ago</span>;
  } else if (postDate.isSame(today, "d")) {
    // Heute
    return <span>Today at {postDate.format("hh:mm a")}</span>;
  } else if (postDate.isSame(today.clone().subtract(1, "d"), "d")) {
    // Gestern
    return <span>Yesterday at {postDate.format("hh:mm a")}</span>;
  } else {
    // Anderes Datum
    return (
      <span>
        {" "}
        {postDate.format("MMMM DD, YYYY")} at {postDate.format("hh:mm a")}
      </span>
    );
  }
};

export default PostDate;
