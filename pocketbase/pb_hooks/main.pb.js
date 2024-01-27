routerAdd("GET", "/custom/unique/sem", (c) => {
    const result = arrayOf(new DynamicModel({
        "sem": "",
    }))

    $app.dao().db()
        .newQuery("SELECT DISTINCT sem FROM students")
        .all(result)

    
    return c.json(200, result.map(obj=>obj.sem))
})

routerAdd("GET", "/custom/unique/section", (c) => {
    const result = arrayOf(new DynamicModel({
        "section": "",
    }))

    $app.dao().db()
        .newQuery("SELECT DISTINCT section FROM students")
        .all(result)

    return c.json(200, result.map(obj=>obj.section))
})

routerAdd("GET", "/custom/unique/branch", (c) => {
    const result = arrayOf(new DynamicModel({
        "branch": "",
    }))

    $app.dao().db()
        .newQuery("SELECT DISTINCT branch FROM students")
        .all(result)

    return c.json(200, result.map(obj=>obj.branch))
})


routerAdd("GET", "/custom/lecturers", (c) => {
    const result = arrayOf(new DynamicModel({
        id:"",
        email:"",
        avatar: "",
        name: "",
        role: "",
        department: "",
        post: ""
    }))

    $app.dao().db()
        .newQuery("SELECT *  FROM lecturers  JOIN users ON lecturers.user = users.id")
        .all(result)

    return c.json(200, result)
})