exports.seed = async function(knex) {
  await knex("tickets").insert([
    { id: 1, 
      title: "Weird terminal errors", 
      description: "I keep getting errors whenever I try to call npx knex seed:make. I'm trying to make a seed file called 'bears'. Here's how I do it in the terminal: 'npx knex seed:make '002-bears.js' - like, what am I doing wrong?",
      tried: "'002bears.js', is it a hyphen thing? What am I missing?",
      category: "Terminal errors",
      completed: false,
      assigned: false,
      // assigned_to: false,
      user_id: 1
    },
    { id: 2, 
      title: "API call being weird", 
      description: "This is going to sound totally weird, but my api operation isn't working. It's not pulling in the data. Something about a CORRS issue. This gotta be a back end issue, maybe?",
      tried: "Spell checked, syntax checked, so outta ideas man.",
      category: "API errors",
      completed: false,
      assigned: false,
      // assigned_to: false,
      user_id: 1
    },
    { id: 3, 
      title: "Deploying my page", 
      description: "I thought Netlify was a go-to winner for deploying a page in the past, but it's not deploying my React page. I followed all the steps. I did the 20 minute rule and this time, my brain is still stumped. Any and all help appreciated, thanks so much!",
      tried: "Checked index file, checked to see if I'm missing any dependencies",
      category: "Deployment issues",
      completed: false,
      assigned: false,
      // assigned_to: false,
      user_id: 2
    },
  ])
}