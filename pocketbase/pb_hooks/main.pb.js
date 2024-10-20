routerAdd("GET", "/custom/unique/sem", (c) => {
    const result = arrayOf(new DynamicModel({
        "sem": "",
    }))

    $app.dao().db()
        .newQuery("SELECT DISTINCT sem FROM students")
        .all(result)


    return c.json(200, result.map(obj => obj.sem))
})

routerAdd("GET", "/custom/unique/section", (c) => {
    const result = arrayOf(new DynamicModel({
        "section": "",
    }))

    $app.dao().db()
        .newQuery("SELECT DISTINCT section FROM students")
        .all(result)

    return c.json(200, result.map(obj => obj.section))
})

routerAdd("GET", "/custom/unique/branch", (c) => {
    const result = arrayOf(new DynamicModel({
        "branch": "",
    }))

    $app.dao().db()
        .newQuery("SELECT DISTINCT branch FROM students")
        .all(result)

    return c.json(200, result.map(obj => obj.branch))
})


routerAdd("GET", "/custom/lecturers", (c) => {
    const result = arrayOf(new DynamicModel({
        id: "",
        email: "",
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

routerAdd("GET", "/custom/unique/enrolledcourses", (c) => {

    const studentUserId = c.queryParam("studentUserId");
    const result = arrayOf(new DynamicModel({
        id: "",
        name: "",
        sever: "",
    }))

    $app.dao().db()
        .newQuery(`
        SELECT courses.id AS id, courses.name AS name,courses.server AS server  FROM servers  JOIN courses ON servers.id = courses.server  JOIN members ON servers.id = members.server WHERE members.user = "${studentUserId}"
        `)
        .all(result)

    return c.json(200, result)
})


routerAdd("GET", "/custom/serverstudents", (c) => {

    const serverId = c.queryParam("serverId");
    const result = arrayOf(new DynamicModel({
        studentId: "",
        name: "",
        usn:""
    }))

    $app.dao().db()
        .newQuery(`SELECT students.id AS studentId, users.name as name, students.usn as usn FROM members JOIN students ON members.user=students.user JOIN users ON users.id = students.user WHERE members.server = "${serverId}"`)
        .all(result)

    return c.json(200, result)
})