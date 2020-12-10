CREATE TABLE "public"."Mode"
(
    id SERIAL PRIMARY KEY NOT NULL,
    mode VARCHAR(255) NOT NULL
);

CREATE TABLE "public"."ExitCandidates"
(
    id SERIAL PRIMARY KEY NOT NULL,
    mode VARCHAR(255) NOT NULL
);

CREATE TABLE "public"."Participants"
(
    id SERIAL PRIMARY KEY NOT NULL,
    survey_mode VARCHAR(255) NOT NULL,
    presurvey JSON,
    mainsurvey JSON,
    postsurvey JSON,
    char_count JSON,
    average_time INT,
    time_taken INT,
    badges INT,
    points INT,
    leaderboard_position INT,
    narratives_unlocked INT,
    browser VARCHAR(255) NOT NULL
);