import csv
from member import Member

class States:
    def __init__(self):
        self.members = []
        self.getMembers()
        self.getRankings()
        self.summary()
        self.exportRankings()

    def getMembers(self):
        with open(f"./raw/states.csv", "r") as file:
            reader = csv.reader(file)
            memberList = next(reader)[1:]
            for name in memberList:
                self.members.append(Member(name, "states"))
            for row in reader:
                for i in range(len(row)):
                    if row[i] == "X":
                        self.members[i - 1].addEvent(row[0])

    def getRankings(self):
        with open(f"./raw/georgia.csv", "r") as file:
            reader = csv.reader(file)
            events = next(reader)
            row = next(reader)
            # i is the index of the row element
            for i in range(len(row)):
                for member in self.members:
                    if events[i] in member.events:
                        member.addRanking(events[i], int(row[i]))

    def exportRankings(self):
        f = open(f"./exports/states.csv", "w", newline = "")
        writer = csv.writer(f)
        f.truncate()
        writer.writerows([
            ["Member", "Georgia Invitational"],
            ["","Event", "Ranking", "Sum"]
        ])
        for member in self.members:
            for event in member.rankKeys:
                writer.writerow([member.name, event, member.rankings[event], member.total])
        f.close()

    def summary(self):
        for member in self.members:
            print(member.getRankings())

States()