import csv

class Competition:
    def __init__(self, n):
        self.name = n
        self.filepath = f"./raw/{self.name}.csv"
        self.scores = []
        self.getRankings()
        self.summary()

    def getRankings(self):
        with open(self.filepath, "r") as file:
            reader = csv.reader(file)
            events = next(reader)
            for row in reader:
                teamRanking = {}
                for i in range(len(row)):
                    teamRanking[events[i]] = int(row[i])
                self.scores.append(teamRanking)

    def summary(self):
        teams = ["States", "Regionals 1", "Regionals 2", "Alternates"]
        for i in range(4):
            print(teams[i])
            teamScores = self.scores[i]
            k = teamScores.keys()
            for key in k:
                print(f"\t{key} {teamScores[key]}")

georgia = Competition("georgia")