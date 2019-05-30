/*

Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

Example 1:
Input:
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
Explanation:
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Note:

The length of accounts will be in the range [1, 1000].
The length of accounts[i] will be in the range [1, 10].
The length of accounts[i][j] will be in the range [1, 30]

*/


class DisjointSet {
    constructor(n) {
        this.arr = Array.from(Array(n), (v, i) => i);
        this.sz = Array(n).fill(1);
    }

    union(a, b) {
        let v1 = this.find(a);
        let v2 = this.find(b);

        if (this.sz[v1] > this.sz[v2]) {
            this.arr[v2] = v1;
            this.sz[v1] += this.sz[v2];
        } else {
            this.arr[v1] = v2;
            this.sz[v2] += this.sz[v1];
        }
    }

    find(v) {
        if (this.arr[v] === v) { return v; }

        this.arr[v] = this.find(this.arr[v]);
        return this.arr[v];
    }
}


const accountsMerge = accounts => {
    let res = [], merged = {}, emails = {}, ds = new DisjointSet(accounts.length);

    for (let i = 0; i < accounts.length; i++) {
        let acc = accounts[i];

        for (let j = 1; j < acc.length; j++) {
            let e = acc[j];

            if (!emails[e]) { emails[e] = []; }
            emails[e].push(i);
        }
    }

    //console.log(emails)
    //console.log(ds)

    for (let e in emails) {
        let idxs = emails[e];

        for (let i = 1; i < idxs.length; i++) {
            ds.union(idxs[0], idxs[i]);
        }
    }

    // console.log(ds)

    for (let i = 0; i < accounts.length; i++) {
        let parent = ds.find(i);

        if (!merged[parent]) { merged[parent] = new Set(); }

        let set = merged[parent];
        for (let j = 1; j < accounts[i].length; j++) {
            set.add(accounts[i][j]);
        }
    }

    //console.log(merged)

    for (let i in merged) {
        let name = accounts[i][0];
        let arr = [...merged[i]].sort();

        res.push([name, ...arr]);
    }

    return res;
};
