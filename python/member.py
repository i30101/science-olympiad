class Member:
    def __init__(self, n, t):
        self.name = n
        self.team = t
        self.events = []
        self.rankings = {}
        self.rankKeys = self.rankings.keys()
        self.total = 0

    def addEvent(self, e):
        self.events.append(e)

    def addRanking(self, k, v):
        self.rankings[k] = v
        self.total += v

    def getRankings(self):
        output = f"{self.name} has gotten the rankings: \n"
        for event in self.events:
            if event in self.rankKeys:
                output += f"\t{self.rankings[event]} in {event}\n"
        return output

    def __str__(self):
        return f"{self.name}:  {' '.join(self.events)}"