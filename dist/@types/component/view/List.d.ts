import { View, ViewStyle } from './View';
import { EventListener } from '../event/Event';
export interface ListStyle extends ViewStyle {
    mode?: 'list' | 'grid' | 'waterfall';
    scrollDirection?: 'vertical' | 'horizontal';
    column?: number;
    lineSpacing?: number | string;
    itemSpacing?: number | string;
    leftSpacing?: number | string;
    rightSpacing?: number | string;
    topSpacing?: number | string;
    bottomSpacing?: number | string;
}
export declare class List extends View {
    refreshView: View;
    loadMoreView: View;
    showScrollBar: boolean;
    bounces: boolean;
    protected _style: ListStyle;
    constructor();
    onRegister: (position: number) => number;
    onCreate: (type: number) => View;
    onUpdate: (position: number, cell: View) => void;
    onRefresh: (state: 0 | 1 | 2) => void;
    onLoadMore: (state: 0 | 1 | 2) => void;
    get style(): ListStyle;
    set style(_style: ListStyle);
    refresh(count: number): void;
    scrollTo(x: number, y: number): void;
    scrollBy(dx: number, dy: number): void;
    scrollToTop(): void;
    scrollToBottom(): void;
    setOnScrollToTopListener(): void;
    setOnScrollToBottomListener(): void;
    stopPullRefresh(): void;
    stopLoadMore(enable?: boolean): void;
    addEventListener(key: 'scroll', listener: EventListener): void;
    removeEventListener(key: 'scroll', listener: EventListener): void;
}
