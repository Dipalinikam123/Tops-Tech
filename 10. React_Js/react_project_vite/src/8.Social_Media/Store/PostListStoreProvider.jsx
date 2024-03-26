import { createContext, useReducer } from "react";

export const PostListData = createContext({
  // api designing or contact designing , Basic Structure
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
});

const reducerPostList = (currentpostListState, action) => {
  return currentpostListState;
};

const ContainerPostListStoreProvider = ({ children }) => {
  const [postList, dispatchPosssList] = useReducer(reducerPostList, Default_post_List);

  const addPostList = () => {};

  const deletePostList = (id) => {
   

  };

  return (
    <PostListData.Provider
      value={
        //this is object upar hai wo structure hai, ye actual m methods hai
        {
          postList: postList,
          addPostList: addPostList,
          deletePostList: deletePostList,
        }
      }
    >
      {children}
    </PostListData.Provider>
  );
};

const Default_post_List = [
  {
    id: "1",
    title: "going to mumbai",
    body: "hiii frnds im going to bombay for vacation with familyyyyyy.......hbyyyeeeeeee",
    reactions: "1",
    userId: "user-9",
    tags: ["vaccation", "mumbai", "enjoing"],
  },
  {
    id: "2",
    title: "going to borad",
    body: "hiii frnds im going to bombay for vacation with familyyyyyy.......hbyyyeeeeeee dipppppppaaaaaaaaliiiiii",
    reactions: "12",
    userId: "user-10",
    tags: ["holidays", "borad", "enjoing"],
  },
];

export default ContainerPostListStoreProvider;

// this is container which has children , children came to what we wrap in this
// componant like <ContainerPostListStoreProvider> <p> Hello </p> <h1> World </h1>
// </ContainerPostListStoreProvider> p1 and h1 is children jo ham as a props lete h, is container ko hum
// design bhi de sakte h aur wo children m aply ho jayegi but yha humne Contex API use kiya hai
// ye jo container hai wo provider return kr rha h jo children use kar sakte hai  values provider ki
