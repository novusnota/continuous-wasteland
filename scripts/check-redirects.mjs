const main = async () => {
  // Running either one check or all checks
  const rawArgs = process.argv.slice(2);
  const argUnique = rawArgs.includes('unique');
  const argExist = rawArgs.includes('exist');
  const argPrevious = rawArgs.includes('previous');
  const argUpstream = rawArgs.includes('upstream');
  const args = [argUnique, argExist, argPrevious, argUpstream];
  const shouldRunAll = args.every((it) => it) || args.every((it) => !it);

  if (shouldRunAll || argUnique) {
    console.log('🏁 Checking uniqueness');
  }

  if (shouldRunAll || argExist) {
    console.log('🏁 Checking existence');
  }

  if (shouldRunAll || argPrevious) {
    console.log('🏁 Checking previous');
  }

  if (shouldRunAll || argUpstream) {
    console.log('🏁 Checking upstream');
  }

  if (process.env['FAIL']) {
    process.exit(1);
  }
};

await main();
