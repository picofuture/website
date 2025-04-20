# Blog Writing Guidelines and Process

## Overview
This document outlines the guidelines and process for creating high-quality blog posts using AI assistance. It serves as a Product Requirements Document (PRD) for both the AI assistant and the content creator.

## Article Types and Their Requirements

### 1. Technical Deep-Dives
- Start with a clear target audience section
- Break down complex topics into digestible sections
- Use mathematical equations when necessary (with explanations)
- Include code snippets with proper context
- Link to external resources and papers
- Use diagrams to explain complex concepts
- Include a TL;DR or key takeaways section

### 2. Tutorial/How-To Guides
- Clear prerequisites section
- Step-by-step instructions with screenshots
- Code snippets with explanations
- Troubleshooting section or common gotchas
- Expected outcomes at each step
- Final result demonstration
- What's Next/Further Reading section

### 3. Philosophical/Thought Pieces
- Strong opening hook
- Personal anecdotes or experiences
- Well-researched arguments with citations
- Balanced perspective on the topic
- Interactive elements (questions, examples)
- Clear conclusion with key insights
- Call to action for engagement

## Interactive Blog Creation Process

### Phase 1: Initial Requirements Gathering
1. **Title and Topic Discussion**
   - AI should ask about the proposed title
   - Discuss the main topic and key points to be covered
   - Identify the target audience
   - Determine the technical depth required
   - Choose the appropriate article type (technical, tutorial, philosophical)

2. **Content Planning**
   - AI should ask about:
     - Desired length of the article
     - Key sections to be covered
     - Any specific examples or code snippets needed
     - Required technical diagrams or images
     - External resources or references to include
     - Target completion date

3. **Style and Tone**
   - Determine the writing style (technical, conversational, tutorial, etc.)
   - Establish the level of technical jargon acceptable
   - Decide on the use of personal experiences/anecdotes
   - Choose between formal or casual tone

### Phase 2: Article Structure Creation

1. **Metadata Setup**
```jsx
export const meta = {
  author: BLOG_AUTHOR_NAME,
  date: 'YYYY-MM-DD',
  title: 'Article Title',
  description: 'A compelling description under 160 characters',
  slug: 'url-friendly-title',
  image: "blog/YYYY-MM-DD-slug/cover.jpg"
}
```

2. **Required Components**
   - Cover image placement at the top
   - Introduction section
   - Main content sections
   - Conclusion or call to action
   - References and links section (if applicable)
   - Author credits/acknowledgments (if applicable)

3. **Skeleton Review**
   - AI should present a complete skeleton with:
     - All major section headings
     - Brief description of what each section will cover
     - Placeholders for images and code snippets
     - Estimated word count per section
     - Interactive elements placement
   - Get user approval before proceeding

### Phase 3: Interactive Writing

1. **Section-by-Section Development**
   - AI should write one section at a time
   - Present each completed section for review
   - Incorporate feedback before moving to the next section
   - Maintain consistency in tone and technical depth
   - Ensure smooth transitions between sections

2. **Code Snippet Guidelines**
   - Use appropriate syntax highlighting
   - Include comments for complex code
   - Ensure code is complete and runnable
   - Provide context before and after code blocks
   - Include expected output or results
   - Add error handling where appropriate

3. **Image Placement**
   - Suggest image locations with placeholders:
   ```jsx
   <BlogImage
     src='blog/YYYY-MM-DD-slug/image-name.jpg'
     alt="Descriptive alt text"/>
   ```
   - Images should be placed:
     - After major section introductions
     - To illustrate complex concepts
     - To break up long text sections
     - Before related code examples
     - As visual aids for step-by-step instructions

4. **Interactive Elements**
   - YouTube video embeds (when relevant)
   - External link references
   - Mathematical equations (for technical content)
   - Diagrams and flowcharts
   - Step-by-step screenshots (for tutorials)

### Phase 4: Enhancement and Polish

1. **Technical Accuracy**
   - Verify all technical claims
   - Test all code snippets
   - Check external links and references
   - Ensure proper attribution
   - Validate mathematical equations
   - Test interactive elements

2. **Content Flow**
   - Smooth transitions between sections
   - Logical progression of ideas
   - Consistent terminology usage
   - Clear explanations of technical concepts
   - Proper use of examples and analogies

3. **SEO Optimization**
   - Proper heading hierarchy (H1, H2, H3)
   - Relevant keywords naturally incorporated
   - Meta description optimization
   - Image alt text completeness
   - URL-friendly slug

## Content Guidelines

### Writing Style
1. **Technical Depth**
   - Start with a high-level overview
   - Gradually increase technical complexity
   - Include both theoretical and practical aspects
   - Provide real-world examples
   - Use analogies for complex concepts

2. **Engagement**
   - Use active voice
   - Include personal experiences where relevant
   - Address reader directly when appropriate
   - Break down complex concepts into digestible parts
   - Ask rhetorical questions to maintain interest

3. **Structure**
   - Clear introduction stating the problem/topic
   - Logical flow of information
   - Consistent section lengths
   - Strong conclusion with key takeaways
   - Call to action or next steps

### Code Examples
1. **Format**
   - Use appropriate language-specific syntax highlighting
   - Include comments for complex logic
   - Break down long code blocks into smaller chunks
   - Provide context and explanation
   - Show input and expected output

2. **Best Practices**
   - Show both basic and advanced implementations
   - Include error handling where relevant
   - Demonstrate best practices
   - Provide working examples
   - Link to full code repositories when applicable

### Image Guidelines
1. **Types of Images**
   - Technical diagrams
   - Process flows
   - Screenshots
   - Conceptual illustrations
   - Step-by-step visual guides

2. **Placement**
   - At the start of the article (cover image)
   - After section introductions
   - Before related code examples
   - To break up long text sections
   - Within step-by-step instructions

3. **Usage in Articles**
   ```jsx
   <BlogImage
     src="blog/YYYY-MM-DD-article-slug/image-name.jpg"
     alt="Descriptive alt text"
   />
   ```
   - Always provide meaningful alt text
   - Use descriptive filenames
   - Place images close to their relevant content
   - Break up long text sections with relevant images
   - Use cover images that represent the article's theme

### External Resources
1. **Links**
   - Use descriptive anchor text
   - Link to authoritative sources
   - Include relevant documentation
   - Add GitHub repositories when applicable
   - Ensure links open in new tabs

2. **References**
   - Cite sources appropriately
   - Link to further reading materials
   - Mention related tools and technologies
   - Credit original authors/creators
   - Include academic citations where relevant

## Quality Checklist

### Before Publishing
- [ ] All sections are complete and reviewed
- [ ] Code snippets are tested and working
- [ ] Images are properly placed and formatted
- [ ] External links are valid and working
- [ ] Meta information is complete and accurate
- [ ] SEO elements are optimized
- [ ] Grammar and spelling are checked
- [ ] Technical accuracy is verified
- [ ] Content flow is smooth and logical
- [ ] Formatting is consistent
- [ ] Interactive elements are working
- [ ] Citations and references are complete
- [ ] Author credits are included
- [ ] Call to action is clear
- [ ] Mobile responsiveness is checked

### File Structure
```
src/pages/articles/
└── article-slug.mdx
```

## Notes for AI Assistant
- Always maintain an interactive dialogue with the user
- Ask for confirmation before proceeding to next sections
- Provide clear explanations for suggested changes
- Be flexible with the structure based on content type
- Maintain consistent quality across all sections
- Follow the user's preferred style and tone
- Suggest improvements while respecting user preferences
- Keep track of the overall article coherence
- Adapt the guidelines based on article type
- Help manage image and resource organization
- Ensure proper citation and attribution
- Guide the user through the entire process
