import csv

events = "It's About Time", " Remote Sensing", " Write It Do It", " Anatomy & Physiology", " Fermi Questions", " Forensics", " Rocks and Minerals", " Cell Biology", " Experimental Design", " Environmental Chemistry", " Detector Building", " Dynamic Planet", " Green Generation", " Astronomy", " Codebusters", " Forestry", " Chem Lab", " Disease Detectives", " Wifi Lab", " Bridge", " Detector Building", " It's About Time", " Scrambler", " Trajectory", " WiFi Lab", " Flight"

firstLine = ["Event"]
secondLine = ["Maximum Points"]
thirdLine = ["Scores"]
for event in events:
    firstLine.append("," + str(event).replace("\"", "") + ",")
    secondLine.append(",,,")
    thirdLine.append(f"Raw,Scaled,Rank")


rows = [firstLine, secondLine, thirdLine]

f = open(f"./temp.csv", "w", newline = "")
writer = csv.writer(f)
f.truncate()
for row in rows:
    writer.writerow(row)
f.close()