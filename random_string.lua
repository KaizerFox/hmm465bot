local letters = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}

function assing_value(number)
	if number <= 26 then
		number = letters[number]
		else
		number = number - 27
	end
	return number
end

function create_id(length)
	local id = ""
	if length > 0 then
		for i = 1, length do
			local number = math.random(1, 36)
			id = id .. assing_value(number)
		end
	end
	return id
end

print(create_id(math.random(1, 100000)))


