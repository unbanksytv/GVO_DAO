import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      // Give your governance contract a name.
      name: "Good Vibes Ohmly",

      // This is the location of our governance token, our ERC-20 contract!
      voting_token_address: "INSERT_TOKEN_ADDRESS",

      // These parameters are specified in number of blocks. 
      // Assuming block time of around 13.14 seconds (for Ethereum)

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      voting_delay_in_blocks: 0,

      // How long do members have to vote on a proposal when it's created?
      // we will set it to 1 day = 6570 blocks (3day = 19710)
      voting_period_in_blocks: 19710,

      // The minimum % of the total supply that need to vote for
      // the proposal to be valid after the time for the proposal has ended.
      voting_quorum_fraction: 33,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      proposal_token_threshold: 10000,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress,
    );
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();