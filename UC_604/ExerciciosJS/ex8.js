function serieDez() {
  console.log("Série 1 (10 em 10 até 1000):");
  for (let i = 10; i <= 1000; i += 10) {
    process.stdout.write(i + " ");
  }
  console.log("\n"); 
}

function serieQuinze() {
  console.log("Série 2 (de 15 em 10 até 995):");
  for (let i = 15; i <= 995; i += 10) {
    process.stdout.write(i + " ");
  }
  console.log("\n");
}

serieDez();
serieQuinze();
