# nialtilson.github.io

[https://nialtilson.github.io/](https://nialtilson.github.io/)

A little bit of background - I started writing a blog way back in 2013 as a part of my exchange program in Germany. Essentially, I really only did it so my mom and sisters could see all the stuff I was getting into over there. But, through time, my growing passion for photography, the interest in sharing the world with whoever will listen, and it being a great way for me to remember all the adventures I get into, I've tried to keep up with it following the end of the program.

Now, this has simply developed into an idea to incorporate my blog and whatever else I see as a potential fit into a personalized website for me. So why this undertaking?
  * I'm cheap, and didn't want to pay for a custom site.
  * I'm a tinkerer, and like taking on (and especially completing) projects
  * I'm a learner, I like to add to my growing quiver of skills

All three of those things combined, plus completion of the Udacity Intro to Programming Nanodegree, has got me here. Let's build!

## Inspirations for my blog and site format
In trying to develop my own blog, and personalize it according to my taste, I did my best to draw upon examples that piqued my interest. Here are just a few that I drew inspiration from:
1. [Feeling-Responsive](https://github.com/Phlow/feeling-responsive)
2. [Artist Theme](http://ninapetrop.github.io/Artist-Theme/)
3. [Lixizhi](https://github.com/lixizhi/lixizhi.github.io)
4. [Documentation Theme Jekyll](https://idratherbewriting.com/documentation-theme-jekyll/)

and of course, the master himself...

5. [srikanth-narayanan](https://github.com/srikanth-narayanan/srikanth-narayanan.github.io)

now some more...

6. [Skinny Bones](https://mmistakes.github.io/skinny-bones-jekyll/articles/)


## Notes and References for Me
[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[Adding Custom Fonts](https://www.pagecloud.com/blog/how-to-add-custom-fonts-to-any-website)

[Top Navigation Bar](https://www.w3schools.com/howto/howto_js_topnav.asp)

[Navigation Toolbar with Subnav Menu](https://www.w3schools.com/howto/howto_css_subnav.asp)

## Definitions and Characteristics of Site Sections
1. Main


## Build Notes
## 2020.04.11
-- Clarification of Blog Page Hierarchy
__ Home
  1. About
     1. Contact
     2. Option 2
     3. Option 3
  2. Blogs
     1. Deutschland, Here We Go!
        X. -posts and pages
     2. Wandering the World Again
        X. -posts and pages
  3. Projects
     1. Website
     2. Bikes
        X. -posts and pages
     3. Woodworking
        X. -posts and pages
     4. Other Fun Stuff
        3.4.X -posts and pages
  4. Photos
     1. Album 1
     2. Album 2
     X. .....

__    = Main
X.    = Section
X.X   = Sub-Section
X.X.X = Page

-- index.html
1.


-- style.css
1.


## 2020.02.04
-- index.html
1. Initialized new document - html
  * Default HTML is HTML5
  * https://www.w3schools.com/html/html5_intro.asp
  * Will enable potential Video or Audio additions later on
2. Created Head section
  * https://www.w3schools.com/html/html_head.asp
  * Page Title
  * Meta definitions
    * https://www.w3schools.com/tags/tag_meta.asp
    * Charset
    * Device viewing
  * Link to stylesheet
3. Initialized BODY of page
  * Created first Division - Menu == 'navbar'
    * Menu (div 'navbar') framework for all pages to include roughly same structure
    * Content of Menu will need to be modified for Sub-Section and Page levels, to include the right-aligned additional Page menu


--style.css
1. Added Sansation Font Family to document
2. Created 'navbar' Class
3. Created 'subnav_l' Class
  * all left-aligned menu items
4. Created 'subnav_r' Class
  * all right-aligned menu items
5. Created 'a' Element
  * To be used for all links in 'navbar'
  * Establishes following items:
    * Left alignment
    * Block display
    * Font-Size
    * Color
    * Text Alignment
    * Padding (x and y)
    * Text Decoration
6. Format of 'body' Element
  * Automatic margin
  * Zero (0) padding at top and bottom
  * Font - Sansation (linked on github)
