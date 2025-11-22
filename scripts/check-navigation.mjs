const main = async () => {
  // Running either one check or all checks
  const rawArgs = process.argv.slice(2);
  const argUnique = rawArgs.includes('unique');
  const argExist = rawArgs.includes('exist');
  const argCover = rawArgs.includes('cover');
  const args = [argUnique, argCover, argExist];
  const shouldRunAll = args.every((it) => it) || args.every((it) => !it);

  if (shouldRunAll || argUnique) {
    console.log('🏁 Checking uniqueness');
  }

  if (shouldRunAll || argExist) {
    console.log('🏁 Checking existence');
  }

  if (shouldRunAll || argCover) {
    console.log('🏁 Checking coverage');
  }

  if (process.env['FAIL']) {
    process.exit(1);
  }
};

await main();
