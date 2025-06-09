const supabase = require('../supabase');

exports.createBook = async (req, res) => {
    const { title, author, year } = req.body;
    const { data, error } = await supabase
        .from('books')
        .insert([{ title, author, year }]);

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0])
}

exports.getBooks = async (_req, res) => {
    const { data, error } = await supabase.from('books').select('*').order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
}

exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, year } = req.body;

    const { data, error } = await supabase
        .from('books')
        .update({ title, author, year })
        .eq('id', id);

    if (error) return res.status(400).json({ error: error.message });
    res.json(data[0]);
}

exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase.from('books').delete().eq('id', id);
    if (error) return res.status(400).json({ error: error.message });
    res.status(204).send();
}