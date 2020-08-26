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

INSERT INTO participant_info
    (
    survey_mode,
    result,
    char_count,
    average_time,
    time_taken,
    badges
    )
VALUES
    (
        'GAMIFIED_VERSION',
        '{"q1": "No answer", "q2": "Healthy"}',
        25,
        6000,
        800000,
        5
);





-- db local start steps
-- psql -d postgres -U api_user
-- \c survey