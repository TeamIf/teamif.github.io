# Team If

This is the official website of Team If.

Team If is a collective of multiple fan translation groups. Current projects consist of Fire Emblem Fates and Great Ace Attorney.

## Adding a Post

1. Create the post's markdown file in the directory `/_posts`
    - The file's name should be formatted like: `2016-05-23-name-of-post.md`
2. The header data of the post will look like the following. Edit it to have all the correct data that you want. (i.e. change the date, Author, title, tags).

    ```
        ---
        layout: post
        title:  "New Website is Ready"
        date:   2016-5-23
        author: Ahris
        tags: [update]
        ---
    ```

3. If you use a new tag that hasn't been used before, you have to:  
    3.a. Edit `/_data/tags.yml` with your new tag. New entries should look like:  

    ```
        - slug: update
          name: Update
    ```

    3.b. In /blog/tags, create a new markdown file for that tag: your-tag-name.md  
    3.c. The content of your-tag-name.md should look like, but with the new tag name:  

    ```
        ---
        layout: blog_by_tag
        title: 'Update'
        tag: update
        permalink: /tags/update/
        hide: true
        ---
    ```

4. The body of the post can be formatted in markdown and HTML. Have fun ~ 
