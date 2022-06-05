# buildspace x thirdweb - Build your own DAO with just Javascript

A DAO is a community of people with a shared bank account. Decisions around how that bank account is used are made by voting on different proposals that members create. When a proposal gets enough votes, it is executed on-chain! We need a governance token so users can vote on proposals. We want let people vote on stuff, automatically count the votes, and let any member execute the proposal on-chain. What's going on here? We're moving 90% of the total tokens we hold to the Vote contract, basically giving up our dictatorship and let the DAO decide how those tokens get spent. Before doing this, we could've done an airdrop to our NFT holders, or distribute tokens in another way, it's up to you how you want to do it! We're actually creating two new proposals for members to vote on: We're creating a proposal that allows the treasury to mint 420,000 new token. You can see we do a "mint" in the code. Maybe the treasury is running low and we want more tokens to award members. Remember, earlier we gave our voting contract the ability to mint new token — so this works! It's a democratic treasury. If you members think this is proposal is stupid and vote “NO”, this simply won't pass!
We're creating a proposal that transfer 6,900 token to our wallet from the treasury. You can see we do a "transfer" in the code. Maybe we did something good and want to be rewarded for it! In the real world, you'd usually create proposals to send other people token. For example, maybe someone helped code up a new website for the DAO and wants to be rewarded for it. You can transfer them tokens! And that's it! Now your proposals have been created, then you would need to create a frontend so people can vote on these.
### **Welcome 👋**
To get started with this course, clone this repo and follow these commands:

1. Run `npm install` at the root of your directory
2. Run `npm start` to start the project
3. Start coding!

### **Questions?**
Have some questions make sure you head over to your [buildspace Dashboard](https://app.buildspace.so/projects/COb520aae3-7925-42f4-a5e7-eaf718933766) and link your Discord account so you can get access to helpful channels and your instructor!
