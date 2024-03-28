import React, { useEffect, useState } from "react";
import image from "../FinalTake/Images/images.webp";
import image2 from "../FinalTake/Images/horror.webp";
import image3 from "../FinalTake/Images/fairytal2.jpg";
import StoryAllComponant from "./StoryAllComponant";

const storyDetails = [
  {
    id: "story1",
    img: image,
    story:
      "Once upon a time, in a little village nestled between rolling hills and meandering streams, there lived a girl named Lily. Lily had a heart as pure as a morning dewdrop and a smile that could brighten the gloomiest of days. Every morning, Lily would wake up to the chirping of birds and the gentle rustle of leaves outside her window. She would skip through fields of wildflowers, her laughter dancing on the breeze. But what Lily loved most of all were the stories her grandmother told her. Grandma Rose had a voice like warm honey and a treasure trove of tales that sparkled with magic. One day, while wandering through the woods near her home, Lily stumbled upon a hidden pathway. Curiosity tingling in her toes, she followed it until she found a tiny door nestled among the roots of a grand oak tree. With a hushed breath, Lily pushed open the door and stepped into a world of wonder. The air was alive with the scent of adventure, and every corner held a new mystery waiting to be discovered. In this enchanted forest, Lily met creatures of all shapes and sizes – from mischievous sprites to wise old owls. Each encounter filled her heart with joy and her mind with wonder. And so, with each passing day, Lily's world grew bigger and brighter, fueled by her curiosity and guided by the magic of her imagination. And as the sun dipped below the horizon, she would return home, her heart brimming with stories to share with Grandma Rose, who listened with a smile as sweet as the tales themselves.",
  },
  {
    id: "story2",
    img: image3,
    story:
      "In  land of Azurea, where the sky was perpetually painted with hues of blue and the rivers flowed with liquid silver, there lived a young boy named Finn. Finn was an orphan, raised by the kind-hearted villagers of Azurea. Despite his humble beginnings, he possessed a heart as pure as the morning dew and a spirit as free as the wind. One day, while wandering through the enchanted forest that bordered the village, Finn stumbled upon a glimmering pool hidden amidst the trees. As he peered into the crystal-clear waters, he saw the reflection of a beautiful mermaid with shimmering scales and eyes like sapphires. Captivated by her beauty, Finn reached out his hand, and to his astonishment, the mermaid emerged from the depths of the pool, her tail shimmering in the sunlight. The mermaid introduced herself as Marina, guardian of the waters of Azurea. She told Finn of a great evil that threatened to engulf the great evil that threatened to engulf the kingdom - the Dark Sorcerer, who sought to plunge Azurea into eternal darkness Determined to protect his home, Finn embarked on a quest to defeat the Dark Sorcerer and restore light to the land. With Marina by his side, he journeyed through treacherous forests, climbed towering mountains, and crossed tumultuous seas.Along the way, they encountered many challenges - from ferocious beasts to treacherous traps - but Finn's bravery and Marina's wisdom saw them through every trial.Finally, they reached the Dark Sorcerer's fortress, a towering citadel shrouded in shadows. With courage in his heart and Marina's magic at his side, Finn confronted the sorcerer in a battle that shook the very foundations of the earth.In the end, it was Finn's pure heart and unwavering determination that prevailed. With a final burst of light, he banished the darkness from Azurea and restored peace to the kingdom once more.As a token of gratitude, the people of Azurea crowned Finn as their hero, and Marina remained by his side as his most trusted companion. Together, they continued to protect the land and ensure that the light of hope never faded from the hearts of its people. And so, the legend of Finn and Marina, the boy and the mermaid, lived on in the songs and stories of Azurea, inspiring future generations to believe in the power of courage, friendship, and love.",
  },
  {
    id: "story3",
    img: image2,
    story:
      "The heart of a desolate forest, shrouded in mist and darkness, there stood an abandoned mansion known as Blackwood Manor. The locals whispered tales of unspeakable horrors that had occurred within its walls, warning travelers to steer clear of its cursed grounds. One fateful night, a group of adventurous friends, drawn by the allure of the macabre, dared each other to spend the night in the haunted mansion. Ignoring the warnings of the townsfolk, they entered Blackwood Manor, unaware of the sinister forces that awaited them. As they explored the decrepit halls, the air grew thick with an oppressive dread, and shadows danced ominously in the flickering candlelight. Each creak of the floorboards echoed like a sinister whisper, and the walls seemed to pulse with a malevolent energy. As midnight approached, strange phenomena began to occur - doors slammed shut of their own accord, eerie whispers echoed from the darkness, and ghostly apparitions materialized before their eyes. But the friends laughed off their fears, dismissing the supernatural occurrences as mere tricks of the mind. However, as the night wore on, their laughter turned to screams of terror as they realized they were not alone in Blackwood Manor. A vengeful spirit, bound to the mansion by a dark and ancient curse, sought to claim their souls as its own. One by one, the friends fell victim to the entity's wrath, their sanity slipping away as they were tormented by visions of their deepest fears. Shadows twisted and writhed, and the very walls of the mansion seemed to come alive with a sinister intent. In a desperate bid for survival, the remaining friends attempted to flee the mansion, but they found themselves trapped within its labyrinthine corridors, pursued by the relentless spirit that hungered for their souls. As dawn broke and the first light of morning pierced the darkness, only one of the friends emerged from Blackwood Manor, his eyes hollow with terror and his mind forever scarred by the horrors he had witnessed. And so, the legend of Blackwood Manor endured, a cautionary tale of the darkness that lurks within the hearts of men and the price paid.",
  },
];

export default function StoryShowPage() {
  return (
    <div className="">
      {storyDetails.map((e, i) => (
        <StoryAllComponant key={i} id={e?.id} story={e.story} img={e.img} />
      ))}
    </div>
  );
}
