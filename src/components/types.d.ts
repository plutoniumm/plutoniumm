type DefSource = "text" | "wikipedia";

interface Defination {
    key: string;
    type: DefSource;
    content: string;
}
