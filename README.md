## SIRCLO Recruitment Technical Test

## General Information

This is a technical test for SIRCLO's Summer 2022 Recruitment. The problem is as stated on this [gist](https://gist.github.com/fandywie/6fac6bb81d4fd2612d4c4847f3f378f2). Any feedback or suggestion are welcomed.

## User Manual

### Prerequisites

First, you need to have any package manager installed. pnpm is preferred (or else, you would be having [this trouble](https://stackoverflow.com/a/55990047/13018015)), but any package manager should do just fine.

Then, run the following command to install the necessary packages:

```
pnpm install
```

### Running the Program

Once you have finished installing the dependencies, run the command below to start the program:

```
pnpm dev
```

The program then will start in development mode. Suppose you want to build the program for production, run the following command:

```
pnpm build
```

### Testing the Program

No test is provided for this program due to the lack of time 🥲.

## Lesson Learned

1. I was planning to use bun.js for experiment purposes. While the next.js program was created successfully, but then I encountered tons of bug when I tried to use Chakra or twin.macro with it
2. I found that last.fm API returns are a bit weird. For instance, suppose I use page=1 and limit=20 parameters. The first page returns 20 results, but then the second page returns only 40 results. Other than that, there are some inconsistencies found, for example, on the artist.search and chart.getTopArtists. This occurence made me reuse the Card component into Card and CardSearch.
3. With the greatest regret, I failed to create tests due to the lack of time. Should I be able to create tests, I would use jest and RTL to test the component.
4. Other things I feel could be improved: Add loading animation when changing tab and add placeholder image when search result is empty. Any other feedbacks are very welcomed.
