module.exports.onCreateNode= ({node, actions}) =>{
    const{createNodeField} = actions

    console.log(node)
}



// exports.onCreateNode = ({ node, actions }) => {
//     const { createNode, createNodeField } = actions
//     // Transform the new node here and create a new node or
//     // create a new node field.
//   }