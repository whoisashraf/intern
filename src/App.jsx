import React, { useState } from "react";
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from "@skyscanner/backpack-web/bpk-component-calendar";

import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import { format } from "date-fns/format";

import "./App.scss";

const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");
const daysOfWeek = [
  {
    name: "Sunday",
    nameAbbr: "Sun",
    index: 0,
    isWeekend: true,
  },
];

function App() {
  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: CALENDAR_SELECTION_TYPE.single,
    date: null,
  });

  const handleDateSelect = (date) => {
    setSelectionConfiguration({
      type: selectionConfiguration.type,
      date: date,
    });
  };

  return (
    <>
      <div>
        <header className={"App__header"}>
          <div className={"App__header-inner"}>
            <BpkText tagName="h1" textStyle="xxl" className={"App__heading"}>
              Flight Schedule
            </BpkText>
          </div>
        </header>
        <main>
          <BpkCalendar
            className={"App__cal"}
            id="calendar"
            onDateSelect={handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={selectionConfiguration}
          />

          <BpkButton className={"App__btn"} onClick={() => alert("It works!")}>
            Continue
          </BpkButton>
        </main>
      </div>
    </>
  );
}

export default App;
