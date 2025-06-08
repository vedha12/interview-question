import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function Javascript() {
  const question = [
    {
      question: "asdasdasd",
      answer: "asdasd",
      codeExample: "asddasd",
      picExample: "assgh",
      level: "Basic",
    },
  ];

  return (
    <Grid>
      <div className="center">
        <Typography variant="h4">Javascript</Typography>
      </div>
      <div>
        {question.map((value, index) => (
          <Grid
            container
            direction="column"
            key={index}
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h5">{` ${index + 1}. ${
              value.question
            }`}</Typography>

            <Typography variant="h6">Answer : </Typography>
            <Typography sx={{ paddingLeft: 4 }}>{`${value.answer}`}</Typography>

            <Divider />
          </Grid>
        ))}
      </div>
    </Grid>
  );
}
