export type Publication = {
    id: string;
    title: string;
    authors: string[];          
    venue: string;             
    date: string;
    url?: string;              
    doi?: string;
    code?: string;             
    abstract?: string;
    tags?: string[];           
  };