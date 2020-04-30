/**
 * Creator: zhangjun
 * Data: 2020/4/13
 * DESC:
 */
/**
 * Initialize your data structure here.
 */
var Twitter = function () {
    this.tweetList = [];
    this.subScript = {};
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    let tweet = {
        id: tweetId,
        userId: userId
    };
    this.tweetList.push(tweet);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    // console.log('userId:', userId);
    console.log('subScript:', this.subScript);
    console.log('list', this.tweetList);
    if (!this.subScript[userId]){
        this.subScript[userId] = []
    }
    let sub = this.subScript[userId];
    let list = this.tweetList.filter((item) => {
        return item.userId === userId || sub.includes(item.userId);
    });
    console.log('sub:', sub);
// console.log('list', listRes);
    let res = list.map((item) => {
        return item.id
    }).reverse().slice(0, 10);
    console.log(res);
    return res;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.subScript[followerId]) {
        this.subScript[followerId] = [];
    }
    this.subScript[followerId].push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.subScript[followerId]){
        this.subScript[followerId] = []
    }
    let index = this.subScript[followerId].indexOf(followeeId);
    console.log(index);
    if (index > -1) {
        this.subScript[followerId].splice(index, 1);
    }

};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
let twitter = new Twitter();

// 用户1发送了一条新推文 (用户id = 1, 推文id = 5).
twitter.postTweet(1, 5);

// 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
twitter.getNewsFeed(1);

// 用户1关注了用户2.
twitter.follow(1, 2);

// 用户2发送了一个新推文 (推文id = 6).
twitter.postTweet(2, 6);

// 用户1的获取推文应当返回一个列表，其中包含两个推文，id分别为 -> [6, 5].
// 推文id6应当在推文id5之前，因为它是在5之后发送的.
twitter.getNewsFeed(1);

// 用户1取消关注了用户2.
twitter.unfollow(1, 2);

// 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
// 因为用户1已经不再关注用户2.
twitter.getNewsFeed(1);

// let func = ['Twitter', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'postTweet', 'follow', 'follow', 'follow', 'follow', 'follow', 'follow', 'follow', 'follow', 'follow', 'follow', 'follow', 'follow', 'getNewsFeed', 'getNewsFeed', 'getNewsFeed', 'getNewsFeed', 'getNewsFeed']
// let args = [[], [1, 6765], [5, 671], [3, 2868], [4, 8148], [4, 386], [3, 6673], [3, 7946], [3, 1445], [4, 4822], [1, 3781], [4, 9038], [1, 9643], [3, 5917], [2, 8847], [1, 3], [1, 4], [4, 2], [4, 1], [3, 2], [3, 5], [3, 1], [2, 3], [2, 1], [2, 5], [5, 1], [5, 2], [1], [2], [3], [4], [5]]
// for (let i = 1; i < func.length; i++) {
//     twitter[func[i]](...args[i]);
// }
