export type Fixture = {
  id: string;
  team1_id: string;
  team2_id: string;
  game_date: string;
  referee: string;
  team1_name: string;
  team2_name: string;
  status: string;
  game_status: string;
  minute: string;
  second: string;
  game_moment: string;
  league: string;
  home_score: string;
  away_score: string;
  matchday: string;
  fixture_type: string;
  series: string;
  agent_id: null;
  category: string;
  field_id: string;
  groupname: string;
  winner: null | string;
  matchtime: string;
  pitchname: string;
};

export type GroupByDate = {
  [date: string]: Fixture[];
};

export type GroupedFixtures = {
  [date: string]: {
    [category: string]: {
      [group: string]: Fixture[];
    };
  };
};

export type Player = {
  tot: string;
  name: string;
  pname: string;
};

export type Scores = Player[];
