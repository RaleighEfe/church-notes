import React from "react";

const sidebarSwitchCase = (
  input,
  setAllBooks,
  setUserDetails,
  setSubscriptions,
  setSettings
) => {
  switch (input) {
    case "allBooks":
      setAllBooks(true);
      setUserDetails(false);
      setSubscriptions(false);
      setSettings(false);

    case "userDetails":
      setAllBooks(false);
      setUserDetails(true);
      setSubscriptions(false);
      setSettings(false);
  }
};

export default sidebarSwitchCase;
