using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class GameScores
    {
        public int GameID { get; set; }
        public int HomeTeam { get; set; }
        public int AwayTeam { get; set; }
        public int HomeTeamScore { get; set; }
        public int AwayTeamScore { get; set; }

    }
}