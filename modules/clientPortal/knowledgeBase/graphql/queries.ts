const categoryFields = `
  _id
  title
  description
  icon
  numOfArticles
  authors {
    details {
      fullName
      avatar
    }
  }
`;

export const getKbTopicQuery = `
  query knowledgeBaseTopicDetail($_id: String!) {
    knowledgeBaseTopicDetail(_id: $_id) {
      _id
      title
      description
      color
      backgroundImage
      languageCode

      categories {
        ${categoryFields}
      }
      
      parentCategories {
        ${categoryFields}
        childrens {
          ${categoryFields}
        }
        articles{
          _id
          title        
        }
      }
    }
  }
`;

export const categoryDetailQuery = `
  query knowledgeBaseCategoryDetail($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
      title
      description
      numOfArticles
      icon
      authors {
        details {
          fullName
          avatar
        }
      }
      articles {
        _id
        title
        summary
        content
        reactionChoices
        createdBy
        createdDate
        modifiedBy
        modifiedDate
        categoryId
        createdUser {
          details {
            fullName
            avatar
          }
        }
      }
    }
  }
`;

export const articleDetailQuery = `
  query knowledgeBaseArticleDetail($_id: String!) {
    knowledgeBaseArticleDetail(_id: $_id) {
      _id
      title
      summary
      content
      status
      reactionChoices
      reactionCounts
      createdBy
      createdUser {
        details {
          fullName
          avatar
        }
      }
      categoryId
      createdDate
      modifiedBy
      modifiedDate
    }
  }
`;
