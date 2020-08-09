## Launches example website inside tmux session


# change path as new updates come
FATIMA_ROOT="/Users/ty/src/themeforest/fatima/07-2020/themeforest-ZT47RZlH-fatima-creative-react-gatsby-blog-template/fatima/home-two-alt"
cd $FATIMA_ROOT 

tmux new -d -s fatima gatsby develop -p 7999