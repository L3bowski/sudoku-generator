export interface Box {
    candidates: Candidate[];
    column: number;
    hasValidCandidates: boolean;
    isInferable: boolean;
    isLocked: boolean;
    maximumImpact: number;
    number?: number;
    region: number;
    row: number;
}

export interface Candidate {
    impact: number;
    isValid: boolean;
    number: number;
}

export type Dictionary<T> = { [key: number]: T };

export interface Group {
    isValid: boolean;
    boxes: Box[];
}

export interface SudokuGroups {
    columns: Dictionary<Group>;
    regions: Dictionary<Group>;
    rows: Dictionary<Group>;
}

export interface Sudoku {
    boxes: Box[];
    groups: SudokuGroups;
    maximumImpact: number;
    regionSize: number;
    size: number;
}
