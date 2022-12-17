const parseEnv = () => {
  const filtredEnvs = Object.entries(process.env).filter((env) =>
    env[0].startsWith("RSS_")
  );
  filtredEnvs.forEach(([key, value]) => {
    console.log(`${key}=${value}`);
  });
};

parseEnv();
