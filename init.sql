CREATE TABLE survey_mode
(
    mode VARCHAR(255) NOT NULL
);

CREATE TABLE exit_case
(
    cases INT
);

CREATE TABLE participant_info
(
    survey_mode VARCHAR(255) NOT NULL,
    result JSON,
    char_count INT,
    average_time INT,
    time_taken INT,
    badges INT,
    points INT,
    leaderboard_position INT,
    narratives_unlocked INT
);