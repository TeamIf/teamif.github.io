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
    3.a. Edit `/_data/tags.yml` with your new tag. New entries should look like the following. Note that the slug field is all lower case and can't include spaces. The name field can include upper case letter and spaces. Just be consistant here and in the following steps.

    ```
        - slug: update
          name: Update
    ```

    3.b. In /blog/tags, create a new markdown file for that tag: `your-tag-slug.md`  
    3.c. The content of `your-tag-slug.md` should look like the following, but with the proper tag name:  

    ```
        ---
        layout: blog_by_tag
        title: 'Update'
        tag: update
        permalink: /tags/update/
        hide: true
        ---
    ```

4. The body of the post can be formatted in markdown and HTML. Push your changes to both the `master` and `gh-pages` branches. Github generates the html from `master`. Have fun ~ 

You can contact Ahris any time if you want clarification! 

## How to change the banner images

The banner images are pulled from an Imgur album and are randomly displayed. To add or change the images being displayed:

1. Create an album on Imgur with the desired pictures. The pictures should be large enough to fit across a large monitor and should be about ~500px to 1000px tall.
2. Edit the first line of `/js/random_images.js` to have the new album ID. 
And that's it!
