import simpleGit from "simple-git";

export async function cloneRepository(
  repoUrl: string,
  targetPath: string
) {

  const git = simpleGit();

  try {

    console.log(
      `Cloning ${repoUrl}`
    );

    await git.clone(
      repoUrl,
      targetPath,
      ["--depth", "1"]
    );

    console.log(
      "Clone completed"
    );

  } catch (error) {

    console.error(
      "Git clone failed:",
      error
    );

    throw error;
  }

}