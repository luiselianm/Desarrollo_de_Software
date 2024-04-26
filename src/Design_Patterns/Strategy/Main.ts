import { BubbleSort, QuickSort, SortingContext } from './classes'

let sortMethod: SortingContext = new SortingContext(new QuickSort(), [1, 2, 3, 4, 5, 6, 7, 8]);

sortMethod.performSort();
sortMethod.setSortingStrategy(new BubbleSort());
sortMethod.performSort();