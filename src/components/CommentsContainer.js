import React from 'react'

const CommentsData = [
    {
        name: "Govind Sah",
        text: "Great video! Loved the storytelling and the plot twist at the end.",
        replies: [
            {
                name: "Ayush Kumar",
                text: "Yeah, Also the information in this video was so helpful.",
            },
            {
                name: "Anshuman Kumar",
                text: "Yeah, The cinematography in this video is stunning.",
            },
        ]
    },
    {
        name: "Govind Kumar",
        text: "Great video! I couldn't stop laughing at that hilarious skit..",
        replies: [
            {
                name: "Sunil Kumar",
                text: "The guitarist is incredibly talented..",
                replies: [
                    {
                        name: "Laxmi Kumari",
                        text: "The lead actor's performance was outstanding.",
                        replies: [
                            {
                                name: "Raju Kuamr",
                                text: "Wow, I never knew these facts about space.",
                                replies: [
                                    {
                                        name: "Hemlata Kumari",
                                        text: "This video perfectly captures the current social media trends."
                                    }
                                ]
                            }

                        ]
                    }
                ]
            },
        ]
    },
    {
        name: "Amit Sah",
        text: "This song reminds me of my summer road trip. Good times!",
        replies: [

        ]
    },
    {
        name: "Anand Sah",
        text: "This song reminds me of my summer road trip. Good times!",
        replies: [

        ]
    },
    {
        name: "Anish Sah",
        text: "This song reminds me of my summer road trip. Good times!",
        replies: [

        ]
    },
    {
        name: "Utkarsh Sah",
        text: "This song reminds me of my summer road trip. Good times!",
        replies: [

        ]
    },
];

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 '>
         <img className='w-12 h-12 ' alt='user' src='https://cdn-icons-png.flaticon.com/512/709/709722.png'/>

        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
        </div>
    )

};

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
        <div key={index} >
            <Comment data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                {comment.replies &&<CommentsList comments={comment.replies} />}
            </div>

        </div>
    ));
};

const CommentsContainer = () => {
  return (
    <div className='p-2 m-5 w-9/12'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList comments={CommentsData}/>
        </div>
  )
}

export default CommentsContainer;