const books = [   
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/41UBaYAAeNS.jpg",
        title: "Dubliners",
        author: "James Joyce",
        price: 12.99,
        description: "Living overseas but writing, always, about his native city, Joyce made Dublin unforgettable. The stories in Dubliners show us truants, seducers, gossips, rally-drivers, generous hostesses, corrupt politicians, failing priests, amateur theologians, struggling musicians, moony adolescents, victims of domestic brutishness, sentimental aunts and poets, patriots earnest or cynical, and people striving to get by. In every sense an international figure, Joyce was faithful to his own country by seeing it unflinchingly and challenging every precedent and piety in Irish literature."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/712oHDSAI9S.jpg",
        title: "The Return of Sherlock Holmes",
        author: "Sir Arthur Conan Doyle",
        price: 12.99,
        description: "The Return of Sherlock Holmes... once again Mr. Sherlock Holmes is free to devote his life to examining those interesting little problems which the complex life of London so plentifully presents. Evil masterminds beware! Sherlock Holmes is back! Ten years after his supposed death in the swirling torrent of the Reichenbach Falls locked in the arms of his arch enemy Professor Moriarty, Arthur Conan Doyle agreed to pen further adventures featuring his brilliant detective. In the first story, 'The Empty House', Holmes returns to Baker Street and his good friend Watson, explaining how he escaped from his watery grave. In creating this collection of tales, Doyle had lost none of cunning or panache, providing Holmes with a sparkling set of mysteries to solve and a challenging set of adversaries to defeat. The potent mixture includes murder, abduction, baffling cryptograms and robbery. We are also introduced to the one of the cruelest villains in the Holmes canon, the despicable Charles Augustus Milverton. As before, Watson is the superb narrator and the magic remains unchanged and undimmed."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71+bAeARMPS.jpg",
        title: "The Memoirs of Sherlock Holmes",
        author: "Sir Arthur Conan Doyle",
        price: 12.99,
        description: "By the time Sir Arthur Conan Doyle had completed the twelve stories for The Strand Magazine that are gathered together in The Adventures of Sherlock Holmes, he was already growing tired of his most famous creation, but the financial incentive to continue was too great. So began the second series of stories, known as The Memoirs; these introduced such notable characters as Holmes indolent brother, Mycroft, and Holmes most dangerous adversary, Professor James Moriarty, the Napoleon of Crime. The collection included such stories as The Adventure of the Resident Patient and The Adventure of the Greek Interpreter, which Doyle would list later as amongst his favorites. It was to Moriarty that was delegated the task of ending the career of the worlds finest consulting detective in a final, fatal encounter at The Reichenbach Falls in Switzerland in the concluding tale, The Final Problem."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/81DIBRE1+LL.jpg",
        title: "Hound of the Baskervilles & Valley of Fear",
        author: "Sir Arthur Conan Doyle",
        price: 12.99,
        description: "The Hound of the Baskervilles is the classic detective chiller. It features the world's greatest detective, Sherlock Holmes, in his most challenging case. The Baskerville family is haunted by a phantom beast with blazing eyes and dripping jaws which roams the mist-enshrouded moors around the isolated Baskerville Hall on Dartmoor. Now the hound seems to be stalking young Sir Henry, the new master of the Baskerville estate. Is this devilish spectre the manifestation of the family curse? Or is Sir Henry the victim of a vile and scheming murderer? Only Sherlock Holmes can solve this devilish affair. The Valley of Fear; is a dark, powerful tale, which provides the great detective with a most perplexing case and opens with a vile murder: Lying across his chest was a most curious weapon, a shotgun with the barrel sawn off in front of the triggers. It was clear that it had been fired at close range, and that he had received the whole charge in the face, blowing his head almost to pieces. Sherlock Holmes' arch enemy, the criminal genius Professor Moriarty, is back! But the solution to the riddle, found after many surprising twists and high dramas, lies far away, half across the world in a location known as The Valley of Fear. This is Conan Doyle's last Holmes novel and in the opinion of many of his fans, it is the best!"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/31Xoj7LGJ7S.jpg",
        title: "A Study in Scarlet & the Sign of the Four",
        author: "Sir Arthur Conan Doyle",
        price: 12.99,
        description: "Doctor Watson, Mr Sherlock Holmes's - The most famous introduction in the history of crime fiction takes place in Sir Arthur Conan Doyle's 'A Study in Scarlet', bringing together Sherlock Holmes, the master of science detection, and John H. Watson, the great detective's faithful chronicler. This novel not only establishes the magic of the Holmes myth but also provides the reader with a dramatic adventure yarn which ranges from the foggy, gas-lit streets of London to the burning plains of Utah. The Sign of the Four, the second Holmes novel, presents the detective with one of his greatest challenges. The theft of the Agna treasure in India forms a catalyst for treachery, deceit and murder. With these two classic novels, A Study in Scarlet and The Sign of the Four, you have the brilliant foundation of the Sherlock Holmes canon. Reading pleasure rarely comes any finer."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/31wN8cQ57pS.jpg",
        title: "The Adventures of Sherlock Holmes",
        author: "Sir Arthur Conan Doyle",
        price: 8.99,
        description: "Having firmly established the characters of Sherlock Holmes and Dr. Watson in the novels A Study in Scarlet and The Sign of the Four, Sir Arthur Conan Doyle was retained by The Strand Magazine to contribute a series of twelve short stories, which began with A Scandal in Bohemia in 1891 and were published monthly for the next year. The stories, in which the master sleuth receives a stream of clients presenting him with baffling and bizarre mysteries in his consulting room at 221B Baker Street, were instantly popular and by the time of the publication of the final story, The Copper Beeches, they had become the mainstay of the magazine. They included such classic tales as The Five Orange Pips and The Adventure of the Speckled Band, and were gathered together in a collection known as The Adventures of Sherlock Holmes, representing some of the finest detective stories ever written."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71ZPkZTC5hL.jpg",
        title: "The Casebook of Sherlock Holmes & His Last Bow",
        author: "Sir Arthur Conan Doyle",
        price: 12.99,
        description: "Surely no man would take up my profession if it were not that danger attracts him. In The Casebook, you can read the final twelve stories that Sir Arthur Conan Doyle wrote about his brilliant detective. They are perhaps the most unusual and the darkest that he penned. Treachery, mutilation and the terrible consequences of infidelity are just some of the themes explored in these stories, along with atmospheric touches of the gothic, involving a bloodsucking vampire, crypts at midnight and strange bones in a furnace. The collection His Last Bow features some of Sherlock Holmes most dramatic cases, including the vicious revenge intrigue connected with The Red Circle and the insidious murders in The Devils Foot. The title story recounts how Sherlock Holmes is brought out of retirement to help the government foil a German plot on the eve of the First World War. These two fascinating sets of stories make a glorious farewell to the greatest detective of them all and his erstwhile companion, Dr Watson."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61rJR23zDYL.jpg",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 11.69,
        description: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan. Considered to be Fitzgerald's magnum opus, The Great Gatsby explores themes of decadence, idealism, resistance to change, social upheaval and excess, creating a portrait of the Roaring Twenties that has been described as a cautionary tale regarding the American Dream."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/615wyfL4DRL.jpg",
        title: "Black Beauty",
        author: "Anna Sewell",
        price: 11.00,
        description: "Black Beauty is a perennial children's favourite, one which has never been out of print since its publication in 1877. It is a moralistic tale of the life of the horse related in the form of an autobiography, describing the world through the eyes of the creature. In taking this anthropomorphic approach, the author Anna Sewell broke new literary ground and her effective storytelling ability makes it very easy for the reader to accept the premise that a horse is recounting the exploits in the narrative. The gentle thoroughbred, Black Beauty, is raised with care and is treated well until a vicious groom injures him. The damaged horse is then sold to various masters at whose hands he experiences cruelty and neglect. After many unpleasant episodes, including one where he becomes a painfully overworked cab horse in London, Black Beauty finally canters towards a happy ending. Although Anna Sewell's classic is set firmly in the Victorian period, its message is universal and timeless: animals will serve humans well if they are treated with consideration and kindness. There have been many film and television adaptations of the story, but it is only the novel that captures the authentic voice of the central character."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61TgYmNuIKL.jpg",
        title: "Wind in the Willows",
        author: "Kenneth Grahame",
        price: 11.69,
        description: "Far from fading with time, Kenneth Grahame's classic tale of fantasy has attracted a growing audience in each generation. Rat, Mole, Badger and the preposterous Mr Toad (with his 'Poop-poop-poop' road-hogging new motor-car), have brought delight to many through the years with their odd adventures on and by the river, and at the imposing residence of Toad Hall. Grahame's book was later dramatised by A. A. Milne, and became a perennial Christmas favourite, as Toad of Toad Hall. It continues to enchant and, above all perhaps, inspire great affection."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/51Ccv0vyFkL.jpg",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 11.69,
        description: "Austen's most popular novel, the unforgettable story of Elizabeth Bennet and Mr. Darcy. Nominated as one of America's best-loved novels by PBS's The Great American Read. Pride and Prejudice is a novel of manners by Jane Austen, first published in 1813. The story follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency. Elizabeth is the second of five daughters of a country gentleman living near the fictional town of Meryton in Hertfordshire, near London. Page 2 of a letter from Jane Austen to her sister Cassandra (11 June 1799) in which she first mentions Pride and Prejudice, using its working title First Impressions. Set in England in the early 19th century, Pride and Prejudice tells the story of Mr and Mrs Bennet's five unmarried daughters after the rich and eligible Mr Bingley and his status-conscious friend, Mr Darcy, have moved into their neighbourhood. While Bingley takes an immediate liking to the eldest Bennet daughter, Jane, Darcy has difficulty adapting to local society and repeatedly clashes with the second-eldest Bennet daughter, Elizabeth. Though Austen set the story at the turn of the 19th century, it retains a fascination for modern readers, continuing near the top of lists of most loved books. It has become one of the most popular novels in English literature, selling over 20 million copies, and receives considerable attention from literary scholars. Modern interest in the book has resulted in a number of dramatic adaptations and an abundance of novels and stories imitating Austen's memorable characters or themes. A True Classic that Belongs on Every Bookshelf!"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61PchxsJyPL.jpg",
        title: "Alice in Wonderland",
        author: "Lewis Carroll",
        price: 12.30,
        description: "Tweedledum and Tweedledee, the Mad Hatter, the Cheshire Cat, the Red Queen and the White Rabbit all make their appearances, and are now familiar figures in writing, conversation and idiom. So too are Carroll's delightful verses such as The Walrus and the Carpenter and the inspired jargon of that masterly Wordsworthian parody, The Jabberwocky. With an Introduction and Notes by Michael Irwin, Professor of English Literature, University of Kent at Canterbury."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71WPzb3zDoL.jpg",
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        price: 12.99,
        description: "Treasure Island is the seminal pirates and buried treasure novel, which is so brilliantly concocted that it appeals to readers both young and old. The story is told in the first person by young Jim Hawkins, whose mother keeps the Admiral Benbow Inn. An old seadog, a resident at the inn, hires Jim to keep a watch out for other sailors whom he fears but, despite all precautions, the old man is served with the black spot which means death. Among the dead man's belongings Jim discovers a map showing the location of the buried treasure of the notorious pirate Captain Flint. It is not long before he, along with Doctor Livesey and Squire Trelawney, sets sail to find the treasure. However, amongst the hired hands is the one-legged Long John Silver who has designs on the treasure for himself. The continuing fascination with this tale of high drama, buried treasure and treachery bears out what Stevenson wrote about the book to his friend W. E. Henley: 'if this don't fetch the kids, why, they have gone rotten since my day.' The book not only continues to 'fetch the kids' but the grown-ups too in fact all those with the spirit of adventure in their hearts."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61PBdwsiMgL.jpg",
        title: "Little Women",
        author: "Louisa May Alcott",
        price: 11.69,
        description: "Little Women is one of the best-loved children's stories of all time, based on the author's own youthful experiences. It describes the family of the four March sisters living in a small New England community. Meg, the eldest, is pretty and wishes to be a lady; Jo, at fifteen is ungainly and unconventional with an ambition to be an author; Beth is a delicate child of thirteen with a taste for music and Amy is a blonde beauty of twelve. The story of their domestic adventures, their attempts to increase the family income, their friendship with the neighbouring Laurence family, and their later love affairs remains as fresh and beguiling as ever."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61Si5vhliOL.jpg",
        title: "Wuthering Heights",
        author: "Emily Brontë",
        price: 8.45,
        description: "Wuthering Heights is Emily Brontë's first and only published novel, written between October 1845 and June 1846, and published in 1847 under the pseudonym Ellis Bell; Brontë died the following year, aged 30. The decision to publish came after the success of her sister Charlotte's novel, Jane Eyre. After Emily's death, Charlotte edited the manuscript of Wuthering Heights, and arranged for the edited version to be published as a posthumous second edition in 1850.Wuthering Heights is the name of the farmhouse where the story unfolds. The book's core theme is the destructive effect of jealousy and vengefulness both on the jealous or vengeful individuals and on their communities."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/718GVyIwIjL.jpg",
        title: "Emma",
        author: "Jane Austen",
        price: 8.96,
        description: "Jane Austen teased readers with the idea of a 'heroine whom no one but myself will much like', but Emma is irresistible. 'Handsome, clever, and rich', Emma is also an 'imaginist', 'on fire with speculation and foresight'. She sees the signs of romance all around her, but thinks she will never be married. Her matchmaking maps out relationships that Jane Austen ironically tweaks into a clearer perspective. Judgement and imagination are matched in games the reader too can enjoy, and the end is a triumph of understanding."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61aFLdicHwL.jpg",
        title: "Christmas Carol",
        author: "Charles Dickens",
        price: 6.99,
        description: "A Christmas Carol is the most famous, heart-warming and chilling festive story of them all. In these pages we meet Ebenezer Scrooge, whose name is synonymous with greed and parsimony: 'Every idiot who goes about with Merry Christmas on his lips, should be boiled with his own pudding, and buried with a stake of holly through his heart'. This attitude is soon challenged when the ghost of his old partner, Jacob Marley, returns from the grave to haunt him on Christmas Eve. Scrooge is then visited in turn by three spirits of Christmas Past, Present and Future, each one revealing the error of his ways and gradually melting the frozen heart of this old miser, leading him towards his redemption. On the journey we take with Scrooge we encounter a rich array of Dickensian characters including the poor Cratchit family with the ailing Tiny Tim and the generous and jolly Fezziwig. When Charles Dickens wrote A Christmas Carol in 1843 he fashioned an enduring gift to the world, capturing the essence of the love, kindness and generosity of the Christmas season. It is a timeless classic and the story's uplifting magic remains as potent today as when it was first published."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61xijBDQK-L.jpg",
        title: "Peter Pan",
        author: "Sir James Matthew Barrie",
        price: 11.69,
        description: "The magical Peter Pan comes to the night nursery of the Darling children, Wendy, John and Michael. He teaches them to fly, then takes them through the sky to Never-Never Land, where they find Red Indians, Wolves, Mermaids and... Pirates. The leader of the pirates is the sinister Captain Hook. His hand was bitten off by a crocodile, who, as Captain Hook explains 'liked me arm so much that he has followed me ever since, licking his lips for the rest of me'. After lots of adventures, the story reaches its exciting climax as Peter, Wendy and the children do battle with Captain Hook and his band."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/719BqJLUGDL.jpg",
        title: "Sense and Sensibility",
        author: "Jane Austen",
        price: 10.12,
        description: "'Young women who have no economic or political power must attend to the serious business of contriving material security'. Jane Austen's sardonic humour lays bare the stratagems, the hypocrisy and the poignancy inherent in the struggle of two very different sisters to achieve respectability. Sense and Sensibility is a delightful comedy of manners in which the sisters Elinor and Marianne represent these two qualities. Elinor's character is one of Augustan detachment, while Marianne, a fervent disciple of the Romantic Age, learns to curb her passionate nature in the interests of survival. This book, the first of Austen's novels to be published, remains as fresh a cautionary tale today as it ever was."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/51X6Sk4UNbL.jpg",
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        price: 6.99,
        description: "Jane Eyre ranks as one of the greatest and most perennially popular works of English fiction. Although the poor but plucky heroine is outwardly of plain appearance, she possesses an indomitable spirit, a sharp wit and great courage. She is forced to battle against the exigencies of a cruel guardian, a harsh employer and a rigid social order. All of which circumscribe her life and position when she becomes governess to the daughter of the mysterious, sardonic and attractive Mr Rochester. However, there is great kindness and warmth in this epic love story, which is set against the magnificent backdrop of the Yorkshire moors. Ultimately the grand passion of Jane and Rochester is called upon to survive cruel revelation, loss and reunion, only to be confronted with tragedy."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/717MH82kTSL.jpg",
        title: "The Railway Children",
        author: "Edith Nesbit",
        price: 12.99,
        description: "When Father goes away with two strangers one evening, the lives of Roberta, Peter and Phyllis are shattered. They and their mother have to move from their comfortable London home to go and live in a simple country cottage, where Mother writes books to make ends meet. However, they soon come to love the railway that runs near their cottage, and they make a habit of waving to the Old Gentleman who rides on it. They befriend the porter, Perks, and through him learn railway lore and much else. They have many adventures, and when they save a train from disaster, they are helped by the Old Gentleman to solve the mystery of their father's disappearance, and the family is happily reunited."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/719wiaS06OL.jpg",
        title: "Great Expectations",
        author: "Charles Dickens",
        price: 11.12,
        description: "Considered by many to be Dickens' finest novel, Great Expectations traces the growth of the book's narrator, Philip Pirrip (Pip), from a boy of shallow dreams to a man with depth of character. From its famous dramatic opening on the bleak Kentish marshes, the story abounds with some of Dickens' most memorable characters. Among them are the kindly blacksmith Joe Gargery, the mysterious convict Abel Magwitch, the eccentric Miss Havisham and her beautiful ward Estella, Pip's good-hearted room-mate Herbert Pocket and the pompous Pumblechook. As Pip unravels the truth behind his own 'great expectations' in his quest to become a gentleman, the mysteries of the past and the convolutions of fate through a series of thrilling adventures serve to steer him towards maturity and his most important discovery of all - the truth about himself."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71Kil5pPjgL.jpg",
        title: "Jungle Book",
        author: "Rudyard Kipling",
        price: 11.69,
        description: "The Jungle Book introduces Mowgli, the human foundling adopted by a family of wolves. It tells of the enmity between him and the tiger Shere Khan, who killed Mowgli's parents, and of the friendship between the man-cub and Bagheera, the black panther, and Baloo, the sleepy brown bear, who instructs Mowgli in the Laws of the Jungle."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71FyFVoDPPL.jpg",
        title: "Mansfield Park",
        author: "Jane Austen",
        price: 12.99,
        description: "Adultery is not a typical Jane Austen theme, but when it disturbs the relatively peaceful household at Mansfield Park, it has quite unexpected results. The diffident and much put-upon heroine Fanny Price has to struggle to cope with the results, re-examining her own feelings while enduring the cheerful amorality, old-fashioned indifference and priggish disapproval of those around her."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71CbzhOVFyL.jpg",
        title: "The Secret Garden",
        author: "Frances Burnett",
        price: 11.69,
        description: "The Secret Garden by Frances Burnett is one of the best-loved stories of all time. Mary Lennox was horrid. Selfish and spoilt, she was sent to stay with her hunchback uncle in Yorkshire. She hated it. But when she finds the way into a secret garden and begins to tend to it, a change comes over her and her life. She meets and befriends a local boy, the talented Dickon, and comes across her sickly cousin Colin who had been kept hidden from her. Between them, the three children work astonishing magic in themselves and those around them."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71Kpkb9SsJL.jpg",
        title: "Persuasion",
        author: "Jane Austen",
        price: 11.72,
        description: "What does persuasion mean - a firm belief, or the action of persuading someone to think something else? Anne Elliot is one of Austen's quietest heroines, but also one of the strongest and the most open to change. She lives at the time of the Napoleonic wars, a time of accident, adventure, the making of new fortunes and alliances. A woman of no importance, she maneuvers in her restricted circumstances as her long-time love Captain Wentworth did in the wars. Even though she is nearly thirty, well past the sell-by bloom of youth, Austen makes her win out for herself and for others like herself, in a regenerated society."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61zwpIg2XUL.jpg",
        title: "Northanger Abbey",
        author: "Jane Austen",
        price: 9.70,
        description: "Northanger Abbey by Jane Austen tells the story of a young girl, Catherine Morland who leaves her sheltered, rural home to enter the busy, sophisticated world of Bath in the late 1790s. Austen observes with insight and humour the interaction between Catherine and the various characters whom she meets there, and tracks her growing understanding of the world about her. In this, her first full-length novel, Austen also fixes her sharp, ironic gaze on other kinds of contemporary novel, especially the Gothic school made famous by Ann Radcliffe. Catherine's reading becomes intertwined with her social and romantic adventures, adding to the uncertainties and embarrassments she must undergo before finding happiness."
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71XZcFbrCnL.jpg",
        title: "Anne of Green Gables",
        author: "Lucy Maud Montgomery",
        price: 11.69,
        description: "Anne Shirley is an eleven-year-old orphan who has hung on determinedly to an optimistic spirit and a wildly creative imagination through her early deprivations. She erupts into the lives of aging brother and sister Matthew and Marilla Cuthbert, a girl instead of the boy they had sent for. Thus begins a story of transformation for all three; indeed the whole rural community of Avonlea comes under Anne's influence in some way. We see her grow from a girl to a young woman of sixteen, making her mistakes, and not always learning from them. Intelligent, hot-headed as her own red hair, unwilling to take a moral truth as read until she works it out for herself, she must also face grief and loss and learn the true meaning of love. Part Tom Sawyer, part Jane Eyre, by the end of Anne of Green Gables, Anne has become the heroine of her own story."
    }    
]