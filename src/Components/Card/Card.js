import React from 'react'
import Header from './Header';



const tasks1 = [
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png', title: '#1: What is crypto...', taskCount: 11 },
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg', title: '#2: Setting up...', taskCount: 8 },
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg', title: '#3: What is a...', taskCount: 8 },
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg', title: '#4: Swapping and bridging...', taskCount: 10 },
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg', title: '#5: NFTs and why...', taskCount: 6 },
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg', title: '#6: Doing quests...', taskCount: 8 },
  ];

  const tasks2 = [
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg', title: '#1: What are airdrops...', taskCount: 7 },
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg', title: '#2: Types of airdrops...', taskCount: 10 },
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png', title: '#3: How to earn...', taskCount: 11 },
    { imageSrc: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg', title: '#4: Things to keep...', taskCount: 7 },
  ];
const Card = () => {
  return (
    <>
   <Header 
        title="Basics Of Crypto"
        subtitle="The safest and easiest place to start your crypto journey!"
        xps="1490"
        tasks={tasks1}
        headerImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
        />
     
      <Header 
        title="Introduction to Airdrops"
        subtitle="Your best bet to make it big in crypto!"
        xps="1040"
        tasks={tasks2}
        headerImage="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"

      />
    </>
  )
}

export default Card